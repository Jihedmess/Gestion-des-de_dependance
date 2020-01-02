package com.pfe.example.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/* Map this entity class to user_account table. */
@Entity(name = "Depence")
public class Depence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idDepence;
    private String designationDepence;
    private Date  dateDepence;
    private Date  dateEcheance;
    private float montant;
    private String observation;
    private String refFacture;
    private String idCI;
    private String idMP;
    private String idFournisseur;
    private String idType;
	public long getIdDepence() {
		return idDepence;
	}
	public void setIdDepence(long idDepence) {
		this.idDepence = idDepence;
	}
	public String getDesignationDepence() {
		return designationDepence;
	}
	public void setDesignationDepence(String designationDepence) {
		this.designationDepence = designationDepence;
	}
	public Date getDateDepence() {
		return dateDepence;
	}
	public void setDateDepence(Date dateDepence) {
		this.dateDepence = dateDepence;
	}
	public Date getDateEcheance() {
		return dateEcheance;
	}
	public void setDateEcheance(Date dateEcheance) {
		this.dateEcheance = dateEcheance;
	}
	public float getMontant() {
		return montant;
	}
	public void setMontant(float montant) {
		this.montant = montant;
	}
	public String getObservation() {
		return observation;
	}
	public void setObservation(String observation) {
		this.observation = observation;
	}
	
	public String getRefFacture() {
		return refFacture;
	}
	public void setRefFacture(String refFacture) {
		this.refFacture = refFacture;
	}
	public String getIdCI() {
		return idCI;
	}
	public void setIdCI(String idCI) {
		this.idCI = idCI;
	}
	public String getIdMP() {
		return idMP;
	}
	public void setIdMP(String idMP) {
		this.idMP = idMP;
	}
	public String getIdFournisseur() {
		return idFournisseur;
	}
	public void setIdFournisseur(String idFournisseur) {
		this.idFournisseur = idFournisseur;
	}
	public String getIdType() {
		return idType;
	}
	public void setIdType(String idType) {
		this.idType = idType;
	}
	
    
}