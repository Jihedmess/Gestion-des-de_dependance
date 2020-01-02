package com.pfe.example.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import com.pfe.example.entity.Depence;
import com.pfe.example.entity.FiltreDate;
import com.pfe.example.entity.Reponse2;
import com.pfe.example.entity.Response3;
import com.pfe.example.entity.ResponseF1;
import com.pfe.example.repository.DepenceRepository;


@Controller
@RequestMapping(path = "/depence")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DepenceController {

    @Autowired
    DepenceRepository depenceRepository;

    /*
     * Mapping url exmaple:
     * http://localhost:8080/userAccount/add?userName=Jerry&password=888888&email=
     * jerry@dev2qa.com
     * http://localhost:8080/userAccount/add?userName=Richard&password=888888&email=
     * richard@google.com
     */
    @PostMapping(path = "/add")
    @ResponseBody
    public ResponseEntity addDepence(@RequestBody Depence depence) {

        Depence depenceA = new Depence();
       
        depenceA.setDesignationDepence(depence.getDesignationDepence());
        depenceA.setDateDepence(depence.getDateDepence());
        depenceA.setDateEcheance(depence.getDateEcheance());
        depenceA.setMontant(depence.getMontant());
        depenceA.setObservation(depence.getObservation());
        depenceA.setRefFacture(depence.getRefFacture());
        depenceA.setIdCI(depence.getIdCI());
        depenceA.setIdMP(depence.getIdMP());
        depenceA.setIdFournisseur(depence.getIdFournisseur());
        depenceA.setIdType(depence.getIdType());
        depenceRepository.save(depence);

        String ret = "Depence account has been added";

        return ResponseEntity.ok().body(ret);

    }

   
    @GetMapping(path = "/findAll")
    @ResponseBody
    public ResponseEntity findAllDepence() {

        StringBuffer retBuf = new StringBuffer();

        List<Depence> depenceAccountList = (List<Depence>) depenceRepository.findAll();
         return ResponseEntity.ok().body(depenceAccountList) ;
       
    }

    
    @GetMapping(path = "/findById/{id}")
    @ResponseBody
    public ResponseEntity findById(@PathVariable  long id) {

        StringBuffer retBuf = new StringBuffer();

        Optional<Depence> depenceAccountList = depenceRepository.findById(id);
        return ResponseEntity.ok().body(depenceAccountList);
       
    }

       @PutMapping(path = "/updateDepence")
    @ResponseBody
    public ResponseEntity updateDepence(@RequestBody Depence depence) {

        StringBuffer retBuf = new StringBuffer();

        Optional<Depence> depenceAccountList = depenceRepository.findById(depence.getIdDepence());

        if (depenceAccountList != null) {
            
        	depenceAccountList.get().setDesignationDepence(depence.getDesignationDepence());
            	
              
               
            depenceAccountList.get().setDateDepence(depence.getDateDepence());
                
            depenceAccountList.get().setDateEcheance(depence.getDateEcheance());
                
            depenceAccountList.get().setMontant(depence.getMontant());
                
            depenceAccountList.get().setObservation(depence.getObservation());
            depenceAccountList.get().setRefFacture(depence.getRefFacture());   
            depenceAccountList.get().setIdCI(depence.getIdCI());
               
            depenceAccountList.get().setIdMP(depence.getIdCI());
                
            depenceAccountList.get().setIdFournisseur(depence.getIdFournisseur());
               
            depenceAccountList.get().setIdType(depence.getIdType());
                
            	depenceRepository.save(depenceAccountList.get());
            
        }

        retBuf.append("Depence data update successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

    
    @DeleteMapping(path = "/deleteById/{id}")
    @ResponseBody
    public ResponseEntity deleteById(@PathVariable long id) {

        StringBuffer retBuf = new StringBuffer();

        depenceRepository.deleteById(id);

        retBuf.append("Depence data has been deleted successfully.");

        return ResponseEntity.ok().body(retBuf.toString()) ;
    }

   
    
    @PostMapping(path = "/findAllbyDate")
    @ResponseBody
    public ResponseEntity findAllDepencebyDatefromAndDateto(@RequestBody FiltreDate filtreDate) throws ParseException {

    	List<Object[]> lstCtxIds = depenceRepository.getDepenceByDate(filtreDate.getDate1(), filtreDate.getDate2());

        List<ResponseF1> depenceAccountList = new ArrayList<>();
        for (Object[] i : lstCtxIds) {
        	System.out.println(i[1]);
        	System.out.println(i[0]);
        	ResponseF1 f1 = new ResponseF1();
        	f1.setCount(Float.valueOf(i[0].toString()));
        	 Date date1=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS").parse(i[1].toString());
        	 SimpleDateFormat dt1 = new SimpleDateFormat("yyyy-MM-dd");
        	 dt1.format(date1);
        	f1.setDate1(dt1.format(date1)+"");
        	depenceAccountList.add(f1);
        	
		}

        if (depenceAccountList != null) {
        	return ResponseEntity.ok().body(depenceAccountList);
        }

        return ResponseEntity.ok().body(depenceAccountList);
    }

    
    @PostMapping(path = "/findAllbyType")
    @ResponseBody
    public ResponseEntity findAllDepencebytype(@RequestBody FiltreDate filtreDate) {

    	List<Object[]> lstCtxIds = depenceRepository.getDepenceByType(filtreDate.getDate1(), filtreDate.getDate2());

        List<Reponse2> depenceAccountList = new ArrayList<>();
        for (Object[] i : lstCtxIds) {
        	System.out.println(i[1]);
        	System.out.println(i[0]);
        	Reponse2 f1 = new Reponse2();
        	f1.setCount(Float.valueOf(i[0].toString()) );
        	f1.setTypeId(i[1]+"");
        	depenceAccountList.add(f1);
        	
		}

        if (depenceAccountList != null) {
        	return ResponseEntity.ok().body(depenceAccountList);
        }

        return ResponseEntity.ok().body(depenceAccountList);
    }
    
    
    @PostMapping(path = "/findAllbyFournisseur")
    @ResponseBody
    public ResponseEntity findAllDepencebyfournisseur(@RequestBody FiltreDate filtreDate) {

    	List<Object[]> lstCtxIds = depenceRepository.getDepenceByFournisseur(filtreDate.getDate1(), filtreDate.getDate2());

        List<Response3> depenceAccountList = new ArrayList<>();
        for (Object[] i : lstCtxIds) {
        	System.out.println(i[1]);
        	System.out.println(i[0]);
        	Response3 f1 = new Response3();
        	f1.setCount(Float.valueOf(i[0].toString()) );
        	f1.setFournisseurId(i[1]+"");
        	depenceAccountList.add(f1);
        	
		}

        if (depenceAccountList != null) {
        	return ResponseEntity.ok().body(depenceAccountList);
        }

        return ResponseEntity.ok().body(depenceAccountList);
    }

    @PostMapping(path = "/findAllbyCentreInteret")
    @ResponseBody
    public ResponseEntity findAllDepencebyCentreInteret(@RequestBody FiltreDate filtreDate) {

    	List<Object[]> lstCtxIds = depenceRepository.getDepenceByCenteInteret(filtreDate.getDate1(), filtreDate.getDate2());

        List<Reponse2> depenceAccountList = new ArrayList<>();
        for (Object[] i : lstCtxIds) {
        	System.out.println(i[1]);
        	System.out.println(i[0]);
        	Reponse2 f1 = new Reponse2();
        	f1.setCount(Float.valueOf(i[0].toString()) );
        	f1.setTypeId(i[1]+"");
        	depenceAccountList.add(f1);
        	
		}

        if (depenceAccountList != null) {
        	return ResponseEntity.ok().body(depenceAccountList);
        }

        return ResponseEntity.ok().body(depenceAccountList);
    }

    @PostMapping(path = "/findAllbyModePaiement")
    @ResponseBody
    public ResponseEntity findAllDepencebyModePaiement(@RequestBody FiltreDate filtreDate) {

    	List<Object[]> lstCtxIds = depenceRepository.getDepenceByMP(filtreDate.getDate1(), filtreDate.getDate2());

        List<Reponse2> depenceAccountList = new ArrayList<>();
        for (Object[] i : lstCtxIds) {
        	System.out.println(i[1]);
        	System.out.println(i[0]);
        	Reponse2 f1 = new Reponse2();
        	f1.setCount(Float.valueOf(i[0].toString()) );
        	f1.setTypeId(i[1]+"");
        	depenceAccountList.add(f1);
        	
		}

        if (depenceAccountList != null) {
        	return ResponseEntity.ok().body(depenceAccountList);
        }

        return ResponseEntity.ok().body(depenceAccountList);
    }


}