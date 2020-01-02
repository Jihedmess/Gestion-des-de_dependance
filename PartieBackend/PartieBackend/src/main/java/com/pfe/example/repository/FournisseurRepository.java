package com.pfe.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.pfe.example.entity.Depence;
import com.pfe.example.entity.Fournisseur;


public interface FournisseurRepository extends CrudRepository<Fournisseur, Long> {

  

}
