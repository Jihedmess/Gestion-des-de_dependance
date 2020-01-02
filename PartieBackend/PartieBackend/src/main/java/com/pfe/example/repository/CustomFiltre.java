package com.pfe.example.repository;

import java.util.List;

public interface CustomFiltre {
	List<Object[]> getDepenceByDate(String datefrom ,String DateTo);
	List<Object[]> getDepenceByType(String datefrom ,String DateTo);
	List<Object[]> getDepenceByFournisseur(String datefrom ,String DateTo);
	List<Object[]> getDepenceByMP(String datefrom ,String DateTo);
	List<Object[]> getDepenceByCenteInteret(String datefrom ,String DateTo);
     	
	

}
