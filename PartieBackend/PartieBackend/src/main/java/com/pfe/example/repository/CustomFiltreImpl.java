package com.pfe.example.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

public class CustomFiltreImpl implements CustomFiltre {
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Object[]> getDepenceByDate(String datefrom, String DateTo) {
		Query sql = em.createQuery("SELECT sum(d.montant), d.dateDepence FROM Depence d where d.dateDepence BETWEEN '" + datefrom +"'"+" AND '" + DateTo+ "' GROUP BY d.dateDepence ORDER BY d.dateDepence");
	    List resultList = sql.getResultList();
	    List <Object[]> q = resultList;
	    return q;
	}

	@Override
	public List<Object[]> getDepenceByType(String datefrom ,String DateTo) {
		Query sql = em.createQuery("SELECT sum(d.montant), d.idType FROM Depence d where d.dateDepence BETWEEN '" + datefrom +"'"+" AND '" + DateTo+ "'GROUP BY d.idType");
		 List resultList = sql.getResultList();
		    List <Object[]> q = resultList;
		return q;
	}

	@Override
	public List<Object[]> getDepenceByFournisseur(String datefrom, String DateTo) {
		Query sql = em.createQuery("SELECT sum(d.montant), d.idFournisseur FROM Depence d where d.dateDepence BETWEEN '" + datefrom +"'"+" AND '" + DateTo+ "'GROUP BY d.idFournisseur");
		 List resultList = sql.getResultList();
		    List <Object[]> q = resultList;
		return q;
	}

	
	@Override
	public List<Object[]> getDepenceByMP(String datefrom ,String DateTo) {
		Query sql = em.createQuery("SELECT sum(d.montant), d.idMP FROM Depence d where d.dateDepence BETWEEN '" + datefrom +"'"+" AND '" + DateTo+ "'GROUP BY d.idMP");
		 List resultList = sql.getResultList();
		    List <Object[]> q = resultList;
		return q;
	}
	@Override
	public List<Object[]> getDepenceByCenteInteret(String datefrom ,String DateTo) {
		Query sql = em.createQuery("SELECT sum(d.montant), d.idCI FROM Depence d where d.dateDepence BETWEEN '" + datefrom +"'"+" AND '" + DateTo+ "'GROUP BY d.idCI");
		 List resultList = sql.getResultList();
		    List <Object[]> q = resultList;
		return q;
	}


}
