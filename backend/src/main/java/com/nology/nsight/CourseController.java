package com.nology.nsight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    CourseRepository repository;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return this.repository.findAll();
    }
}
