import { Component, OnInit } from '@angular/core'; 
import {ServicegestiondepenceService} from '../services/servicegestiondepence.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ServicegestionfournisseurService} from '../services/servicegestionfournisseur.service';
import {ServicetypeService} from '../services/servicetype.service';
import {ServicemodepayementService} from '../services/servicemodepayement.service';
import {ServicegestioncentreinteretService} from '../services/servicegestioncentreinteret.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
   listdepence : any
   depence : Depence = new Depence()
   closeResult: string;
   listFournisseur : any
   listMPayement :any
   listType :any
   listCentreInteret : any
    fournisseurstring :any
    centreIntertstring :any
    typestring : any
    modepayementstring : any

    dataarrived:boolean
    table :boolean

  constructor(private service :ServicegestiondepenceService ,private modalService: NgbModal, private servif :ServicegestionfournisseurService , private serviType :ServicetypeService , private serviceMp:ServicemodepayementService , private serviceCI : ServicegestioncentreinteretService ,private toastr: ToastrService ) { }
  ngOnInit() {
  
  
 


this.dataarrived = false
this.table = true
this.service.getDepencesList().toPromise().then((res :any)=>{
   this.listdepence = res;
  
})
/* setTimeout (() => {
  console.log("Hello from setTimeout");
}, 2000);

  console.log('teste result to promise')
  console.log(this.listdepence.idDepence)
  this.listdepence.idCI = this.getCentreIntert(this.listdepence.idDepence)
this.listdepence.idMP = this.getModePayement(this.listdepence.idDepence)
this.listdepence.idFournisseur = this.getFournisseur(this.listdepence.idDepence)
this.listdepence.idType = this.getType(this.listdepence.idDepence)
this.table = true

*/


this.servif.getFournisseursList().subscribe((res:any)=>{
  this.listFournisseur = res
})

this.serviceMp.getModePayementsList().subscribe((res:any)=>{
  this.listMPayement = res
})

this.serviType.getTypesList().subscribe((res :any)=>{
  this.listType = res
})
this.serviceCI.getCentreInteretList().subscribe((res:any)=>{
  this.listCentreInteret = res
})


        
  }


  delete(id){
    this.service.deleteDepence(id).subscribe((res:any)=>{
      console.log(res)
    })
  }

  createDepence(){
    console.log(this.depence.dateDepence +"dateDepence")
    console.log(this.depence.dateEcheance + "dateEcheance")
    console.log(this.depence.designationDepence + "designationDepence")
    console.log(this.depence.idCI +"idCI")
   
    console.log(this.depence.idFournisseur +"idFournisseur")
    console.log(this.depence.idMP+ "idMP")
    console.log(this.depence.idType +"idType")
    console.log(this.depence.montant +"montant")
    console.log(this.depence.observation +"observation")
    console.log(this.depence.refFacture+"refFacture" )
   
    if(this.depence.dateDepence != undefined && this.depence.dateEcheance != undefined
      && this.depence.designationDepence != undefined && this.depence.idCI != undefined
      && this.depence.idFournisseur != undefined
      && this.depence.idMP != undefined && this.depence.idType != undefined
      && this.depence.montant != undefined && this.depence.observation != undefined
      
    )
     {
       
    this.service.createDepence(this.depence).subscribe((res :any)=>{
      console.log(res)
      console.log(this.depence)
    })
    this.toastr.success('Depence est ajouté avec succés', 'Done');
  }else{
    this.toastr.error('Remplir les champs', 'Error');
  }
  }


   getFournisseur(id):string {
     this.servif.getFournisseur(id).subscribe((res:any)=>{
      this.fournisseurstring = res.email
     })
   return this.fournisseurstring;
  }

  getModePayement(id):string{
    this.serviceMp.getModePayement(id).subscribe((res:any)=>{
      this.modepayementstring = res.designationMP
    })
    return this.modepayementstring
    
  }


  getType(id):string{
    this.serviType.getType(id).subscribe((res:any)=>{
      this.typestring= res.designation
    })

    return this.typestring
  }
  

  getCentreIntert(id):string{
    this.serviceCI.getCentreInteret(id).subscribe((res:any)=>{

      this.centreIntertstring = res.designationCI
    })
    return this.centreIntertstring
  }

  upadate(){
    this.service.updateDepence(this.depence.idDepence ,this.depence).subscribe((res:any)=>{
      console.log(res)
    })
  }


  open(content, id ) {
    this.depence.idDepence = id
    this.service.getDepence(id).subscribe((res:any)=>{
      this.depence.dateDepence = res.dateDepence
      this.depence.dateEcheance = res.dateEcheance
      this.depence.designationDepence = res.designationDepence
      this.depence.idCI = res.idCI
      this.depence.idFournisseur = res.idFournisseur
      this.depence.idMP = res.idMP
      this.depence.idType = res.idType
      this.depence.montant = res.montant
      this.depence.observation = res.observation
      this.depence.refFacture = res.refFacture
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
export class Depence {
  idDepence : any
  designationDepence : string
  montant : any
  refFacture : string
  dateDepence :Date  
  dateEcheance : Date
  observation : string
  idCI : string
  idMP : string
  idFournisseur : string
  idType :string

  
}