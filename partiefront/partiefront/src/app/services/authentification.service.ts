import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  
   

   connectAdminMethode () {
    
     localStorage.setItem('user', 'admin');
     
  }
   connectUserMethode() {
    
   
    localStorage.setItem('user', 'user');
     
   }


   connectresponsableMethode() {
    
   
    localStorage.setItem('user', 'responsable');
     
   }

   deconnecter(){
    localStorage.setItem('user', null);
   
   }
   

}
