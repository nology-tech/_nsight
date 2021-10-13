package com.nology.nsight.controllers;

import com.nology.nsight.entities.Students;
import com.nology.nsight.repositories.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/students/{id}")
    public Students getStudentById(@PathVariable int id) {
        return repository.findById(id).get();
    }

    // POST
    @PostMapping("/students")
    public Students createStudent(@RequestBody Students newStudent) {
        return repository.save(newStudent);
    }

    // PUT
    @PutMapping("/students/{id}")
    public Students updateStudent(@RequestBody Students newStudent, @PathVariable int id) {
        repository.findById(id).get();
        return repository.save(newStudent);
    }

    //DELETE
    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable int id) {
        repository.deleteById(id);
    }
}
