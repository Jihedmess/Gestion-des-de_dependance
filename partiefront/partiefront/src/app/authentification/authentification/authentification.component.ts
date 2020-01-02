import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthentificationService } from 'app/services/authentification.service';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor(private router: Router , private service :AuthentificationService) { }
   login :any
   password : any
   alert :boolean
  ngOnInit() {
    this.alert = false
  }

  connecte(){
    if(this.login == "admin" && this.password == "123"){
    this.router.navigate(['/dashboard']);
    this.service.connectAdminMethode()
  }else if(this.login == "user" && this.password =="123") {
    this.service.connectUserMethode()
    this.router.navigate(['/dashboard']);
  }else if(this.login == "responsable" && this.password =="123") {
    this.service.connectresponsableMethode()
    this.router.navigate(['/dashboard']);
  }else{
   this.alert = true
   this.router.navigate(['/login']);
  }
  }

}
