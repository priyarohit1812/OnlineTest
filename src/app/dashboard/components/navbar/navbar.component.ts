import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  is_loggedIn: boolean;
  is_admin: boolean;
  sessionStorage: Storage;
 
  constructor( private router: Router) { }
  ngOnInit(): void {
   let token = sessionStorage.getItem("token");
    this.is_admin = JSON.parse(sessionStorage.getItem("is_admin") || "false");
    
  }

  logout(){
 
    this.sessionStorage.clear;
    
  }
   clearSessionData() {
           
      sessionStorage.clear(); 
      this.router.navigateByUrl("user/login"); 
     }
  
}
