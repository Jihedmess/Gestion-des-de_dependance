import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import {ServicegestiondepenceService} from '../services/servicegestiondepence.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service :ServicegestiondepenceService ,private spinner: NgxSpinnerService) { } 
 idcanvaslinefiltre1  = "canvasfiltre1line"
 idcanvasbarfiltre1  = "canvasfiltre1bar"
 idcanvaspiefiltre1  = "canvasfiltre1pie"

 idcanvasbarfiltre2 = "canvasfiltre2"
 

 idcanvaspiefiltre3  = "canvasfiltre3"
 
 

///////////////////////////////
  chowchartelinefiltre1 : boolean
 chowchartebarfiltre1 : boolean
 chowchartepiefiltre1 : boolean
 
 /////////////////////////////////
  options = {
    
      legend: {
          display: false
      },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
    }
};
/////////////////////////////////////
  conditionfilre1 :any
  ////////////////////////////////////////
  canvaspie1:any
  ctxpie1 :any
  canvasline1:any
  ctxline1 :any
  canvasbar1 :any
  ctxbar1 :any
  arraypie:any
  arraybar :any
  dataline  = new Array()
  labelsline = new Array()
  filtre1 : Filtre = new Filtre()
  data_arrived1 : boolean
/////////////////////////////////  
////////////////////////////filtre3
  filtre3 : Filtre = new Filtre()
  datalpie = new Array()
  labelspie = new Array()
  colorpie = new Array()
  colorsbar = new Array()
///////////////////////////filtre2
filtre2 : Filtre = new Filtre()  
databar = new Array() 
labelbar = new Array()
  ngOnInit() {
    this.chowchartelinefiltre1 = true
    this. chowchartebarfiltre1 = false
    this.chowchartepiefiltre1 = false
    this.conditionfilre1 = "type";
    ////////////////////////////////////////////////
    this.filtre2.date1 = "2018-10-02"
    this.filtre2.date2 = "2020-10-02"
   this.filtrePartie2()

    ////////////////////////////////////////////
    this.filtre3.date1 = "2018-10-02"
    this.filtre3.date2 = "2020-10-02"
   this.filtrePartie3()
  //////////////////////////////////////////////////////  
    this.data_arrived1 = true
    this.filtre1.date1 = "2018-10-02"
    this.filtre1.date2 = "2020-10-02"
   this.filtrePartie1()
   
   
  

  }
   



  filtrePartie1(){
    if(this.conditionfilre1 == "mp"){
    this.chowchartelinefiltre1 = true
    this. chowchartebarfiltre1 = false
    this.chowchartepiefiltre1 = false
    this.datalpie = []
    this.labelspie = []
    this.colorpie = []
    this.service.filtreMP(this.filtre1).subscribe((res :any)=>{
      for (let item of res){
        this.datalpie.push(item.count)
        this.labelspie.push(item.typeId)
        this.colorpie.push(this.randomcolor())
      }
      this.charte_pie(this.labelspie,this.datalpie,this.colorpie,this.idcanvaspiefiltre1)
    })
  }


  if(this.conditionfilre1 == "type"){
    this.chowchartelinefiltre1 = false
    this. chowchartebarfiltre1 = false
    this.chowchartepiefiltre1 = true
    this.datalpie = []
    this.labelspie = []
    this.colorpie = []
    this.service.filtretype(this.filtre3).subscribe((res :any)=>{
      for (let item of res){
        this.datalpie.push(item.count)
        this.labelspie.push(item.typeId)
        this.colorpie.push(this.randomcolor())
      }
      this.charte_pie(this.labelspie,this.datalpie,this.colorpie,this.idcanvaspiefiltre1)
    })

  }


  if(this.conditionfilre1 == "ci"){
    this.chowchartelinefiltre1 = false
    this. chowchartebarfiltre1 = true
    this.chowchartepiefiltre1 = false
    this.datalpie = []
    this.labelspie = []
    this.colorpie = []
    this.service.filtreCentreInteret(this.filtre3).subscribe((res :any)=>{
      for (let item of res){
        this.datalpie.push(item.count)
        this.labelspie.push(item.typeId)
        this.colorpie.push(this.randomcolor())
      }
      this.charte_pie(this.labelspie,this.datalpie,this.colorpie,this.idcanvaspiefiltre1)
    })

  }
   
  }
  filtrePartie2(){
    this.labelbar = []
    this.databar = []
    this.colorsbar = []
    this.service.filtreFournisseur(this.filtre2).subscribe((res:any)=>{
      for(let item of res){
        this.databar.push(item.count)
        this.labelbar.push(item.fournisseurId)
        this.colorsbar.push(this.randomcolor())
      }
      this.charte_bar(this.labelbar,this.databar,this.colorsbar,this.idcanvasbarfiltre2)
    })
  }

  filtrePartie3(){
    this.labelsline = []
    this.dataline = []
    
    this.service.filtre(this.filtre3).subscribe((res:any)=>{
      console.log(res)
      for(let item of res){
        console.log("teste la valeur de data")
        console.log(item.date1)
        this.labelsline.push(item.date1)
        this.dataline.push(item.count)
      }
      this.charte_line(this.labelsline , this.dataline ,this.idcanvaspiefiltre3)
    })
  }




   randomcolor() :string{
     let x = (10.0 * Math.random());
     let y = Math.random()*2
     let z = Math.random()*3
    

     return 'rgb('+(255.0 * Math.random())+','+(255.0 * Math.random())+','+(255.0 * Math.random())+')'
   }
  charte_pie(labels , data , colors ,idcanvas){
    this.canvaspie1 = document.getElementById(idcanvas);
    this.ctxpie1 = this.canvaspie1.getContext('2d');
    let myChart = new Chart(this.ctxpie1, {
      type: 'pie',
      data: {
          labels: labels,
          datasets: [{
              label: '# of Votes',
              data: data,
              backgroundColor:  this.colorpie/* [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ]*/,
              borderWidth: 1
          }]
      },
      options: {}
    });
  }


  charte_line(labels , data,idcanvas){
    
    this.canvasline1 = document.getElementById(idcanvas);
    this.ctxline1 = this.canvasline1.getContext('2d');
    var myLineChart = new Chart(this.ctxline1, {
      
       type: 'line',
       data: {
        labels: labels,
        datasets: [{
            
            data: data
        }]
    },
       options : this.options
      
  });
  } 


  charte_bar(labels ,data ,colors,idcanvas){
    this.canvasbar1 = document.getElementById(idcanvas);
    this.ctxbar1 = this.canvasbar1.getContext('2d');
    var myLineChart = new Chart(this.ctxbar1, {
      
       type: 'bar',
       data: {
        labels: labels,
        datasets: [{
            
            data: data,
            backgroundColor: colors
        }]
    },
       options : this.options
      
  });
  }
}
export class Filtre{
   date1 :any
   date2 :any
}