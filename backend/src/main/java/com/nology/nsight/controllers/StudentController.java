package com.nology.nsight.controllers;

import com.nology.nsight.entities.Message;
import com.nology.nsight.entities.Students;
import com.nology.nsight.exceptions.ResourceNotFoundException;
import com.nology.nsight.repositories.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class StudentController {

    @Autowired
    IStudentRepository  repository;

    // GET
    @GetMapping("/students")
    public ResponseEntity<List<Students>> indexStudents() {
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
    }

    // GET/{id}
    @GetMapping("/students/{id}")
    public ResponseEntity<Object> showStudent(@PathVariable int id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Message("Couldn't find student with id " + id));
        }
        return ResponseEntity.status(HttpStatus.OK).body(repository.findById(id).get());
    }

    // POST
    @PostMapping("/students")
    public ResponseEntity<Message> createStudent(@RequestBody Students newStudent) {
        repository.save(newStudent);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new Message("Successfully added the Student to the database."));
    }

    // PUT
    @PutMapping("students/{id}")
    public ResponseEntity<Object> updateStudent(@PathVariable int id, @RequestBody Students updatedStudent) {
        if(this.repository.existsById(id)) {
            this.repository.deleteById(id);
            this.repository.save(updatedStudent);
            return ResponseEntity.status(HttpStatus.OK).body(updatedStudent);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Message("Could not find student with id " + id));
    }

    //DELETE
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Message> deleteStudent(@PathVariable int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK)
                .body(new Message("Successfully deleted the Student from the database."));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Message("Couldn't find student with id " + id));
    }
}
