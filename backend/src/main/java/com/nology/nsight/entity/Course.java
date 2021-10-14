package com.nology.nsight.entity;

import org.springframework.lang.Nullable;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Course {

    @Id
    private int id;
    private String courseName;
    private int numberEnrolled;
    private int percentageEmployed;
    private String courseLead;
    private Integer numberCompleted = null;
    private Boolean status = null;
    private Date courseStart = null;
    private Date courseCompletion = null;

    public Course(int id, String courseName, int numberEnrolled, int percentageEmployed, String courseLead, boolean status, Date courseStart, Date courseCompletion, int numberCompleted) {
        this.id = id;
        this.courseName = courseName;
        this.numberEnrolled = numberEnrolled;
        this.percentageEmployed = percentageEmployed;
        this.courseLead = courseLead;
        this.status = status;
        this.courseStart = courseStart;
        this.courseCompletion = courseCompletion;
        this.numberCompleted = numberCompleted;
    }

//    public Course(int id, String courseName, int numberEnrolled, int percentageEmployed, String courseLead, int numberCompleted) {
//        this.id = id;
//        this.courseName = courseName;
//        this.numberEnrolled = numberEnrolled;
//        this.percentageEmployed = percentageEmployed;
//        this.courseLead = courseLead;
//        this.numberCompleted = numberCompleted;
//    }

    public Course() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getNumberEnrolled() {
        return numberEnrolled;
    }

    public void setNumberEnrolled(int numberEnrolled) {
        this.numberEnrolled = numberEnrolled;
    }

    public int getPercentageEmployed() {
        return percentageEmployed;
    }

    public void setPercentageEmployed(int percentageEmployed) {
        this.percentageEmployed = percentageEmployed;
    }

    public String getCourseLead() {
        return courseLead;
    }

    public void setCourseLead(String courseLead) {
        this.courseLead = courseLead;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Date getCourseStart() {
        return courseStart;
    }

    public void setCourseStart(Date courseStart) {
        this.courseStart = courseStart;
    }

    public Date getCourseCompletion() {
        return courseCompletion;
    }

    public void setCourseCompletion(Date courseCompletion) {
        this.courseCompletion = courseCompletion;
    }

    public Integer getNumberCompleted() {
        return numberCompleted;
    }

    public void setNumberCompleted(Integer numberCompleted) {
        this.numberCompleted = numberCompleted;
    }
}
