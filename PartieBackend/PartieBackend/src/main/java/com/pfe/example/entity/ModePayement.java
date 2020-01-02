package com.pfe.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/* Map this entity class to user_account table. */
@Entity(name = "ModePayement")
public class ModePayement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMP;

    
    private String designationMP;


	public Long getIdMP() {
		return idMP;
	}


	public void setIdMP(Long idMP) {
		this.idMP = idMP;
	}


	public String getDesignationMP() {
		return designationMP;
	}


	public void setDesignationMP(String designationMP) {
		this.designationMP = designationMP;
	}
    
    

    

}