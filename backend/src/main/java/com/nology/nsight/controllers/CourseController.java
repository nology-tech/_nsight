package com.nology.nsight.controllers;

import com.nology.nsight.entities.Course;
import com.nology.nsight.entities.Message;
import com.nology.nsight.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@CrossOrigin
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
    public ResponseEntity<List<Course>> getCourses() {
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Integer id){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(findCourseById(id));
    }

    @PostMapping("/courses")
    public ResponseEntity<Message> createCourse(@RequestBody Course newCourse) {
        repository.save(newCourse);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new Message("The course was successfully added!"));
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable int id, @RequestBody Course newCourse){
        Course existingCourse = findCourseById(id);
        existingCourse.setCourseCompletion(newCourse.getCourseCompletion());
        existingCourse.setCourseLead(newCourse.getCourseLead());
        existingCourse.setCourseName(newCourse.getCourseName());
        existingCourse.setCourseStart(newCourse.getCourseStart());
        existingCourse.setNumberEnrolled(newCourse.getNumberEnrolled());
        existingCourse.setPercentageEmployed(newCourse.getPercentageEmployed());
        existingCourse.setNumberEnrolled(newCourse.getNumberEnrolled());

        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(existingCourse);
    }



    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Message> deleteCourse(@PathVariable int id) {
        this.repository.deleteById(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new Message("Successfully deleted course with id " + id));
    }


}
