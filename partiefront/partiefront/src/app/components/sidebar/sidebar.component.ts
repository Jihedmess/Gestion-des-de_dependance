import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/services/authentification.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Gestion des Fournisseurs',  icon:'person', class: '' },
    { path: '/table-list', title: 'Gestion des depences ',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Gestion des payements',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Gestion des types',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Gestions des interets',  icon:'location_on', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
   user :any
   userconnected : boolean
  constructor(private service :AuthentificationService) { }

  ngOnInit() {
    this.user =  localStorage.getItem('user')
   
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
