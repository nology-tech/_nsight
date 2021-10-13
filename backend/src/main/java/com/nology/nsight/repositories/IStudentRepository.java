package com.nology.nsight.repositories;

import com.nology.nsight.entities.Students;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;

public interface IStudentRepository extends JpaRepository<Students, Integer> {
}
