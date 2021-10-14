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

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StudentController.class)
public class StudentsControllerTest {
    private final List<Students> StudentList = List.of(
        new Students(1, "Jerome", "Kithinji", null , "kithinjijerome@gmail.com", "07535529310", "Nology", "consumer", true, "E&Y", "software engineer"),
        new Students(2, "Alex", "Wower", null , "alexwower@gmail.com", "07893435432", "Nology", "consultancy", true, "Nology", "software engineer"),
        new Students(3, "Helen", "Khor", null , "hkhor@gmail.com", "07901234565", "Nology", "consultancy", true, "Nology", "software engineer")
    );

    private final Students newStudent4 = new Students(4, "Salim", "Abada", null , "salim@gmail.com", "07901234565", "Nology", "consultancy", true, "Nology", "software engineer");
    private final Students updateStudent1 = new Students(1, "Charlene", "Kithinji", null , "kithinjicharlene@gmail.com", "07535529310", "Nology", "consumer", true, "E&Y", "software engineer");


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IStudentRepository repository;

    @Test
    @DisplayName("Index Route should return a list of students if they exist")
    public void indexRouteShouldReturnListOfStudents() throws Exception {
        when(repository.findAll()).thenReturn(StudentList);

        mockMvc.perform(get("/students"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andReturn();
    }

    @Test
    @DisplayName("Create Route should create a new student.")
    public void createRouteShouldCreateAStudent() throws Exception {
        mockMvc.perform(post("/students")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(toJson(newStudent4))
                    .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.text", is("Successfully added the Student to the database.")))
                .andReturn();

        mockMvc.perform(delete("/students/4"));
    }

    @Test
    @DisplayName("Update Route should update the student and return a successful message")
    public void updateRouteShouldUpdateTheStudentAndReturnASuccessfulMessage() throws Exception {
        mockMvc.perform(put("/students/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(updateStudent1))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.first_name", is("Charlene")))
                .andExpect(jsonPath("$.last_name", is("Kithinji")))
                .andExpect(jsonPath("$.dob", is(null)))
                .andExpect(jsonPath("$.email", is("kithinjicharlene@gmail.com")))
                .andExpect(jsonPath("$.mobile_number", is("07535529310")))
                .andExpect(jsonPath("$.thumbnail", is("Nology")))
                .andExpect(jsonPath("$.type", is("consumer")))
                .andExpect(jsonPath("$.employed", is(true)))
                .andExpect(jsonPath("$.employer", is("E&Y")))
                .andExpect(jsonPath("$.role", is("software engineer")))
                .andReturn();
    }

    @Test
    @DisplayName("Delete Route should delete a student")
    public void deleteRouteDeleteAStudent() throws Exception {
//        when(repository.findAll()).thenReturn(StudentList);

//         Create a list of fake projects for our mock repo to return
        List<Students> students = new ArrayList();
        students.add(new Students(4, "Salim", "Abada", null , "salim@gmail.com", "07901234565", "Nology", "consultancy", true, "Nology", "software engineer"));
        when(repository.findAll()).thenReturn(students);

        mockMvc.perform(delete("/students/4"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", is("Successfully deleted the Student from the database.")))
                .andReturn();
    }


    private static String toJson(Students newStudent) throws JsonProcessingException {
        System.out.println(new ObjectMapper().writeValueAsString(newStudent));
        return new ObjectMapper().writeValueAsString(newStudent);
    }

}
