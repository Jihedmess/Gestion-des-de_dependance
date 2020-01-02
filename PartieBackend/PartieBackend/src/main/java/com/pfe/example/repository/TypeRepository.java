package com.pfe.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.pfe.example.entity.Type;


public interface TypeRepository extends CrudRepository<Type, Long> {

    

}
