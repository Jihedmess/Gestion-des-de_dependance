package com.pfe.example.controller;

import java.util.List;

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
import java.util.Optional;

import com.pfe.example.entity.CentreInteret;
import com.pfe.example.entity.Depence;
import com.pfe.example.entity.ModePayement;
import com.pfe.example.repository.CentreIntertRepository;
import com.pfe.example.repository.DepenceRepository;


@Controller
@RequestMapping(path = "/centre")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CentreInteretController {

    @Autowired
    CentreIntertRepository centreRepository;

   
    @PostMapping(path = "/add")
    @ResponseBody
    public ResponseEntity addDepence(@RequestBody CentreInteret centre) {

    	CentreInteret centreA = new CentreInteret();
        centreA.setDesignationCI(centre.getDesignationCI());
        
         Object a =  centreRepository.save(centreA);

        

        return ResponseEntity.ok().body(a);

    }

    @GetMapping(path = "/findAll")
    @ResponseBody
    public ResponseEntity findAllMP() {

        StringBuffer retBuf = new StringBuffer();

        List<CentreInteret> centreInteretAccountList = (List<CentreInteret>) centreRepository.findAll();
         return ResponseEntity.ok().body(centreInteretAccountList);
       
    }

   
    @GetMapping(path = "/findById/{id}")
    @ResponseBody
    public ResponseEntity findById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        Optional<CentreInteret> centreIntertAccount = centreRepository.findById(id);

      
        return ResponseEntity.ok().body(centreIntertAccount);
    }

   
    @PutMapping(path = "/updateCentreInteret")
    @ResponseBody
    public ResponseEntity updateMp(@RequestBody CentreInteret ci ) {

        StringBuffer retBuf = new StringBuffer();

        Optional<CentreInteret> centreIntertAccount = centreRepository.findById(ci.getIdCI());

        if (centreIntertAccount != null) {
           
        	centreIntertAccount.get().setDesignationCI(ci.getDesignationCI());;
            	
        	centreRepository.save(centreIntertAccount.get());
            
        }

        retBuf.append("centre data update successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    @DeleteMapping(path = "/deleteById/{id}")
    @ResponseBody
    public ResponseEntity deleteById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        centreRepository.deleteById(id);

        retBuf.append("centre data has been deleted successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    

   
       

}