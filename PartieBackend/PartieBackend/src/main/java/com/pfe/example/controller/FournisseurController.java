package com.pfe.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pfe.example.entity.Depence;
import com.pfe.example.entity.Fournisseur;
import com.pfe.example.repository.DepenceRepository;
import com.pfe.example.repository.FournisseurRepository;


@Controller
@RequestMapping(path = "/fournisseur")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FournisseurController {

    @Autowired
    FournisseurRepository fournisseurRepository;

    
    @PostMapping(path = "/add")
    @ResponseBody
    public ResponseEntity addUser(@RequestBody Fournisseur fournisseur) {

        Fournisseur fournisseurAccount = new Fournisseur();
        fournisseurAccount.setContact(fournisseur.getContact());
        fournisseurAccount.setAdresse(fournisseur.getAdresse());
        fournisseurAccount.setMatricule(fournisseur.getMatricule());
        fournisseurAccount.setRaison_sociale(fournisseur.getRaison_sociale());
        fournisseurAccount.setType(fournisseur.getType());
        fournisseurAccount.setTelfournisseur(fournisseur.getTelfournisseur());
        fournisseurAccount.setActif(fournisseur.isActif());
        fournisseurAccount.setEmail(fournisseur.getEmail());

        fournisseurRepository.save(fournisseurAccount);

        String ret = "Fournisseur account has been added";

        return ResponseEntity.ok().body(ret);

    }

   
    @GetMapping(path = "/findAll")
    @ResponseBody
    public ResponseEntity findAllDepence() {

        StringBuffer retBuf = new StringBuffer();

        List<Fournisseur> fournisseurAccountList = (List<Fournisseur>) fournisseurRepository.findAll();
        return ResponseEntity.ok().body(fournisseurAccountList)   ;
      
    }

    
    @GetMapping(path = "/findById/{id}")
    @ResponseBody
    public ResponseEntity findById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        Optional<Fournisseur> fournisseurAccount =  fournisseurRepository.findById(id);

       
        return ResponseEntity.ok().body(fournisseurAccount);
    }

    @PutMapping(path = "/updateFournisseur")
    @ResponseBody
    public ResponseEntity updateFourniseeur(@RequestBody Fournisseur fournisseur) {

        StringBuffer retBuf = new StringBuffer();

        Optional<Fournisseur> fournisseurAccount = fournisseurRepository.findById(fournisseur.getIdFournisseur());

        if (fournisseurAccount != null) {
           
        	
            fournisseurAccount.get().setContact(fournisseur.getContact());
            
            fournisseurAccount.get().setAdresse(fournisseur.getAdresse());
            
            fournisseurAccount.get().setMatricule(fournisseur.getMatricule());
            
            fournisseurAccount.get().setRaison_sociale(fournisseur.getRaison_sociale());
           
            fournisseurAccount.get().setType(fournisseur.getType());
           
            fournisseurAccount.get().setTelfournisseur(fournisseur.getTelfournisseur());
            fournisseurAccount.get().setActif(fournisseur.isActif());
            fournisseurAccount.get().setEmail(fournisseur.getEmail());
          
            	fournisseurRepository.save(fournisseurAccount.get());
            
        }

        retBuf.append("User data update successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    
    @DeleteMapping(path = "/deleteById/{id}")
    @ResponseBody
    public ResponseEntity deleteById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        fournisseurRepository.deleteById(id);

        retBuf.append("Fournisseur data has been deleted successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }


}