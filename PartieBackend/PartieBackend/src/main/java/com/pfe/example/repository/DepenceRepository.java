package com.pfe.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.pfe.example.entity.Depence;

public interface DepenceRepository extends CrudRepository<Depence, Long> ,CustomFiltre {

   

}
