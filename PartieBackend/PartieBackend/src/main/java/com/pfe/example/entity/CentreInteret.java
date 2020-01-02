package com.pfe.example.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/* Map this entity class to user_account table. */
@Entity(name = "CentreInteret")
public class CentreInteret {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCI;
    private String designationCI;
	public long getIdCI() {
		return idCI;
	}
	public void setIdCI(long idCI) {
		this.idCI = idCI;
	}
	public String getDesignationCI() {
		return designationCI;
	}
	public void setDesignationCI(String designationCI) {
		this.designationCI = designationCI;
	}
    
    
      
}