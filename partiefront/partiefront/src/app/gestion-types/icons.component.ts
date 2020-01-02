import { Component, OnInit } from '@angular/core';
import {ServicetypeService} from '../services/servicetype.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from 'app/services/authentification.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
   listtype : any
   type : Type = new Type
   
   closeResult: string;
   table :any
  constructor(private service : ServicetypeService ,private modalService: NgbModal , private serviceAuth : AuthentificationService,private toastr: ToastrService) { }

  ngOnInit() {
    this.type.designation = ""

 this.getListType()

  }

getListType (){
  this.table = false
  this.service.getTypesList().subscribe((res:any)=>{
    this.listtype = res;
    this.table = true
  })
}

   deleteType(id){
    this.service.deleteType(id).subscribe((res:any)=>{
      console.log(res);
    })
    this.getListType()
   }


   updateType(){
     console.log('teset la valeur de type ')
     console.log(this.type)
     this.service.updateType(this.type).subscribe((res :any)=>{
       console.log(res)
     })
     this.getListType()
   }


   addType(){
     console.log("teste la valeur de type")
     console.log(this.type.designation)
     if(this.type.designation != ""){
    this.service.createType(this.type).subscribe((res:any)=>{
      console.log(res)
    })
    this.toastr.success('Type est ajouté avec succés', 'Done');
    this.getListType()
  }else{
    this.toastr.error('Remplir les champs' ,'Error')
  }
   }
   open(content,id) {
     console.log('tesete afficher id type')
     console.log(id)
    this.type.idType = id;
    this.service.getType(id).subscribe((res:any)=>{
      this.type.designation = res.designation
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
export class Type {

  idType: number;
  designation: string;
  
}