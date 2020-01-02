import { Component, OnInit } from '@angular/core';
import {ServicegestionfournisseurService} from '../services/servicegestionfournisseur.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
   listfournisseur : any
   fournisseur : Fournisseur = new Fournisseur()
   closeResult: string;
   table :boolean
  constructor(private service : ServicegestionfournisseurService ,private modalService: NgbModal ,private toastr: ToastrService  ) { }

  ngOnInit() {
    this.getAllListeFournisseur();
  }


  deletefourniseeur(id){
     this.service.deleteFournisseur(id).subscribe((res:any)=>{
     console.log(res)
   }) 
   this.getAllListeFournisseur()
  }


  createFournisseur(){
    console.log(this.fournisseur.actif + "actif")
    console.log(this.fournisseur.adresse + "adresse")
    console.log(this.fournisseur.contact + "contact")
    console.log(this.fournisseur.email + "email")
    console.log(this.fournisseur.idFournisseur + "idFournisseur")
    console.log(this.fournisseur.matricule +"matricule")
    console.log(this.fournisseur.raison_sociale +"raison_sociale")
    console.log(this.fournisseur.telfournisseur +"telfournisseur")
    console.log(this.fournisseur.type + "type")
    if(this.fournisseur.adresse !="" && this.fournisseur.adresse != "" 
    && this.fournisseur.email != "" && this.fournisseur.telfournisseur.toString.length <9
    && this.fournisseur.matricule != "" && this.fournisseur.raison_sociale != ""
    && this.fournisseur.telfournisseur != null && this.fournisseur.type != null){

    
    this.service.createFournisseur(this.fournisseur).subscribe((res:any)=>{
      console.log(res)
    })
    this.toastr.success('Fournisseur est ajouté avec succés', 'Done');
    this.getAllListeFournisseur()
  }else{
    this.toastr.error('Remplir les champs', 'Error');
  }
  }


  updateFournisseur(){
    this.service.updateFournisseur(this.fournisseur.idFournisseur , this.fournisseur).subscribe((res:any)=>{
      console.log(res)
      this.getAllListeFournisseur()
    })
  }
  getAllListeFournisseur(){
    this.table = false
    this.service.getFournisseursList().subscribe((res :any)=>{
      this.listfournisseur = res;
      this.table = true
     })
   this.fournisseur.actif = false
   this.fournisseur.adresse = ""
   this.fournisseur.contact=""
   this.fournisseur.email=""
   this.fournisseur.matricule=""
   this.fournisseur.raison_sociale=""
   this.fournisseur.telfournisseur = null
   this.fournisseur.type= null
   

  }
  open(content, id ) {
    this.fournisseur.idFournisseur = id
    this.service.getFournisseur(id).subscribe((res:any)=>{
      this.fournisseur.actif = res.actif
      this.fournisseur.adresse = res.adresse
      this.fournisseur.contact = res.contact
      this.fournisseur.email = res.email
      this.fournisseur.matricule = res.matricule
      this.fournisseur.raison_sociale = res.raison_sociale
      this.fournisseur.telfournisseur = res.telfournisseur
      this.fournisseur.type = res.type
    })
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }

 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }



}
export class Fournisseur {

  idFournisseur: number;
  contact: string;
  adresse: string;
  matricule: string;
  raison_sociale: string;
  type: string;
  email: string;
  actif: any ;
  telfournisseur: number;

  
}