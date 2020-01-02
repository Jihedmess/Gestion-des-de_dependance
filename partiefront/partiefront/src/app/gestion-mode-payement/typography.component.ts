import { Component, OnInit } from '@angular/core';
import {ServicemodepayementService} from '../services/servicemodepayement.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  listModepayement : any
  modepayement : ModePayement = new ModePayement()
  closeResult: string;
  table : boolean
  constructor(private service : ServicemodepayementService ,private modalService: NgbModal ,private toastr: ToastrService) { }

  ngOnInit() {

    this.modepayement.designationMP = ""
    
  this.getAllListeMp()
  }


  delete(id){
    
    this.service.deleteModePayement(id).subscribe((res: any)=>{
      console.log(res)
    })

    this.getAllListeMp()
  }


  upadeModePayement(){
    
    this.service.updateModePayement(this.modepayement.idMP ,this.modepayement).subscribe((res:any)=>{
      console.log(res)
    })
    this.getAllListeMp()
  }


  createModePayement(){
    if(this.modepayement.designationMP != ""){
      this.service.createModePayement(this.modepayement).subscribe((res:any)=>{
      console.log(res)
    })
    this.toastr.success('Mode de payement est ajouté avec succés', 'Done');
    this.getAllListeMp()
  }else{
    this.toastr.error('Remplir les champs', 'Error');
  }

}
  getAllListeMp(){
    this.table= false
    this.service.getModePayementsList().subscribe((res:any)=>{
      this.listModepayement = res ;
      this.table = true
    })
    
  }
  open(content, id ) {
   this.modepayement.idMP = id
   this.service.getModePayement(id).subscribe((res:any)=>{
     this.modepayement.designationMP = res.designationMP
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
export class ModePayement {

  idMP: number;
  designationMP: string;
  
}