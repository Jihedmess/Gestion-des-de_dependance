import { Component, OnInit } from '@angular/core';
import {ServicegestioncentreinteretService} from '../services/servicegestioncentreinteret.service';
declare const google: any;
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    listCentreIntert : any ;
    centreinteret : CentreInteret = new CentreInteret()
    closeResult: string;
    table :boolean
  constructor(private service :ServicegestioncentreinteretService ,private modalService: NgbModal,private toastr: ToastrService) { }

  ngOnInit() {

     this.centreinteret.designationCI = ""
     this.getListe()
   
    }

    delete(id){
     this.service.deleteCentreInteret(id).subscribe((res :any)=>{
       console.log(res)
     })
     this.getListe()
    }

   update(){
     this.service.updateCentreInteret(this.centreinteret.idCI,this.centreinteret).subscribe((res:any)=>{
       console.log(res)
     })
     this.modalService.dismissAll()
     this.getListe()
   }


   create(){
      if(this.centreinteret.designationCI != ""){
     this.service.createCentreInteret(this.centreinteret).subscribe((res:any)=>{
       console.log(res)
     })

     this.toastr.success('Centre interet est ajouté avec succés', 'Done');
     this.getListe()
    }else{
      this.toastr.error('Remplir les champs', 'Error'); 
    }
   }
      
   open(content, id ) {
     this.centreinteret.idCI = id;
     this.service.getCentreInteret(id).subscribe((res :any)=>{
       this.centreinteret.designationCI = res.designationCI
     })
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getListe(){
    this.table = false
    this.service.getCentreInteretList().subscribe((data) :any  =>{
         
      this.listCentreIntert = data;
      this.table = true
  }) ;
 
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


export class CentreInteret {

  idCI : number
  designationCI : string


}
