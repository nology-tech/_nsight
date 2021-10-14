package com.nology.nsight.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nology.nsight.controllers.StudentController;
import com.nology.nsight.entities.Students;
import com.nology.nsight.repositories.IStudentRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Date;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StudentController.class)
public class StudentsControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IStudentRepository repository;

    private final Students newStudent = new Students(1, "Jerome", "Kithinji", null , "kithinjijerome@gmail.com", "07535529310", "Nology", "0753552934", true, "consumer", "consumer");


//    @Test
//    @DisplayName("Index Route should return a list of users if they exist")
//    public void indexRouteShouldReturnListOfUsers() throws Exception {
//        when(repository.findAll()).thenReturn();
//
//        mockMvc.perform(get("/students"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$", hasSize()))
//                .andReturn();
//
//
//    }

    @Test
    @DisplayName("Create Route should create a new student.")
    public void createRouteShouldCreateAStudent() throws Exception {
        mockMvc.perform(post("/students")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(toJson(newStudent))
                    .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.text", is("Successfully added the Student to the database.")))
                .andReturn();

        mockMvc.perform(delete("/students/1"));

    }

//    @Test
//    @DisplayName("Delete Route should delete a student")
//    public void deleteRouteDeleteAStudent() throws Exception {
//        mockMvc.perform(post("/students")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(toJson(newStudent))
//                        .accept(MediaType.APPLICATION_JSON));
//
//        mockMvc.perform(delete("/students/1"))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.text", is("Successfully deleted the Student from the database.")))
//                .andReturn();
//
//        mockMvc.perform(post("/students")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(toJson(newStudent))
//                .accept(MediaType.APPLICATION_JSON));
//    }


    private static String toJson(Students newStudent) throws JsonProcessingException {
        System.out.println(new ObjectMapper().writeValueAsString(newStudent));
        return new ObjectMapper().writeValueAsString(newStudent);
    }

}
