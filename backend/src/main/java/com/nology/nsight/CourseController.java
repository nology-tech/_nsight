package com.nology.nsight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {
    public Course findCourseById(int id) {
        List<Course> courses = repository.findAll();
        Course foundCourse =  courses.stream()
                .filter((course) -> course.getId() == id)
                .findFirst()
                .orElse(null);
        return foundCourse;
    }

    @Autowired
    CourseRepository repository;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return this.repository.findAll();
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Integer id){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(findCourseById(id));
    }

}
