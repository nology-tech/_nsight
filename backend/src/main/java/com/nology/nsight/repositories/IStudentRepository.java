package com.nology.nsight.repositories;

import com.nology.nsight.entities.Students;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;

public interface IStudentRepository extends JpaRepository<Students, Integer> {

    Students newStudent4 = new Students(1, "Jerome", "Kithinji", null , "kithinjijerome@gmail.com", "07535529310", "Nology", "0753552934", true, "consumer", "consumer");

}
