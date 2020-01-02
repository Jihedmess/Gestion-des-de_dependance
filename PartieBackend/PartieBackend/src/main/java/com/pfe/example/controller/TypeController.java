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
import com.pfe.example.entity.Type;
import com.pfe.example.repository.DepenceRepository;
import com.pfe.example.repository.TypeRepository;


@Controller
@RequestMapping(path = "/type")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TypeController {

    @Autowired
    TypeRepository typeRepository;

   
    @PostMapping(path = "/add")
    @ResponseBody
    public ResponseEntity addType(@RequestBody Type type) {

        Type typeAccount = new Type();
        typeAccount.setDesignation(type.getDesignation());
        
        typeRepository.save(typeAccount);

        String ret = "Type account has been added";

        return ResponseEntity.ok().body(ret) ;

    }

    
    @GetMapping(path = "/findAll")
    @ResponseBody
    public ResponseEntity findAllType() {

        StringBuffer retBuf = new StringBuffer();

        List<Type> typeAccountList = (List<Type>) typeRepository.findAll();

        return ResponseEntity.ok().body(typeAccountList);
    }

   
    @GetMapping(path = "/findById/{id}")
    @ResponseBody
    public ResponseEntity findByName(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        Optional<Type> typeAccount =  typeRepository.findById(id);

       

        return ResponseEntity.ok().body(typeAccount);
    }

  
    @PutMapping(path = "/updateType")
    @ResponseBody
    public ResponseEntity updateType(@RequestBody Type type) {

        StringBuffer retBuf = new StringBuffer();
        System.out.println("testeee");
        System.out.println(type.getIdType());

        Optional<Type> typeAccount = typeRepository.findById(type.getIdType());

        if (typeAccount != null) {
            
            	typeAccount.get().setDesignation(type.getDesignation());
            	
            	typeRepository.save(typeAccount.get());
            
        }

        retBuf.append("Type data update successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

   
    @DeleteMapping(path = "/deleteById/{id}")
    @ResponseBody
    public ResponseEntity deleteById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        typeRepository.deleteById(id);

        retBuf.append("type data has been deleted successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    

}