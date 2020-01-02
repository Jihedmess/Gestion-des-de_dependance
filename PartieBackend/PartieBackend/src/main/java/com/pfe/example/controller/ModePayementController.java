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
import com.pfe.example.entity.ModePayement;
import com.pfe.example.repository.DepenceRepository;
import com.pfe.example.repository.ModePayementRepository;


@Controller
@RequestMapping(path = "/modepayement")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ModePayementController {

    @Autowired
    ModePayementRepository modepayementRepository;

   
    @PostMapping(path = "/add")
    @ResponseBody
    public ResponseEntity addMP(@RequestBody ModePayement modepayement ) {

        ModePayement modepayementAccount = new ModePayement();
        modepayementAccount.setDesignationMP(modepayement.getDesignationMP());;
        

        modepayementRepository.save(modepayementAccount);

        String ret = "Mode Payement account has been added";

        return ResponseEntity.ok().body(ret);

    }

    
    @GetMapping(path = "/findAll")
    @ResponseBody
    public ResponseEntity findAllMP() {

        StringBuffer retBuf = new StringBuffer();

        List<ModePayement> modepayementAccountList = (List<ModePayement>) modepayementRepository.findAll();
        return ResponseEntity.ok().body(modepayementAccountList);
    }

   
    @GetMapping(path = "/findById/{id}")
    @ResponseBody
    public ResponseEntity findById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        Optional<ModePayement> modepayementAccount = modepayementRepository.findById(id);

        return ResponseEntity.ok().body(modepayementAccount);
    }

   
    @PutMapping(path = "/updateMP")
    @ResponseBody
    public ResponseEntity updateMp(@RequestBody ModePayement mp ) {

        StringBuffer retBuf = new StringBuffer();

        Optional<ModePayement> modepayementAccount = modepayementRepository.findById(mp.getIdMP());

        if (modepayementAccount != null) {
           
            	modepayementAccount.get().setDesignationMP(mp.getDesignationMP());;
            	
            	modepayementRepository.save(modepayementAccount.get());
            
        }

        retBuf.append("ModePayement data update successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    @DeleteMapping(path = "/deleteById/{id}")
    @ResponseBody
    public ResponseEntity deleteById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        modepayementRepository.deleteById(id);

        retBuf.append("Modepayement data has been deleted successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    

}