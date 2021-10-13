package com.nology.nsight.controllers;

import com.nology.nsight.entities.Students;
import com.nology.nsight.repositories.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    IStudentRepository  repository;

    // GET
    @GetMapping("/students")
    public List<Students> getStudents() {
        return this.repository.findAll();
    }

    // GET/{id}

    // POST

    // PUT

    //DELETE

}
