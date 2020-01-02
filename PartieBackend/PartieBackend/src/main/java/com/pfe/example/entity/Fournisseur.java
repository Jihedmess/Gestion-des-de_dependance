package com.pfe.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/* Map this entity class to user_account table. */
@Entity(name = "fournisseur")
public class Fournisseur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idFournisseur;

    
    private String contact;

    private String adresse;

    private String matricule;
    
    private String raison_sociale;

    private String type;
    private String email;
    
    private boolean actif;

    private int telfournisseur;
    
    
    
    

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isActif() {
		return actif;
	}

	public void setActif(boolean actif) {
		this.actif = actif;
	}

	public long getIdFournisseur() {
		return idFournisseur;
	}

	public void setIdFournisseur(long idFournisseur) {
		this.idFournisseur = idFournisseur;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getRaison_sociale() {
		return raison_sociale;
	}

	public void setRaison_sociale(String raison_sociale) {
		this.raison_sociale = raison_sociale;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getTelfournisseur() {
		return telfournisseur;
	}

	public void setTelfournisseur(int telfournisseur) {
		this.telfournisseur = telfournisseur;
	}

    
}