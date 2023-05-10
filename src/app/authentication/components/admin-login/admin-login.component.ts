import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  msg:string="";
  adminLoginFrom = this.builder.group({
    username: this.builder.control('',[Validators.required]),
    password: this.builder.control('',[Validators.required])
  });

  adminLoginRequest: any = {
    username: "",
    password: ""
  };
  
  constructor(private builder:FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.adminLoginFrom.valueChanges.subscribe((r)=>{
      this.adminLoginRequest.username = r.username;
      this.adminLoginRequest.password = r.password;
    });
    let token = sessionStorage.getItem("token");
    let is_admin = JSON.parse(sessionStorage.getItem("is_admin") || "false");
    if (token) {
      if (!is_admin) {
        this.router.navigateByUrl("user/dashboard");
      } else {
        this.router.navigateByUrl("admin/dashboard");
      }
      
    }
  }

  login(){
    if (this.adminLoginFrom.valid) {
      this.authService.userLogin(this.adminLoginRequest).subscribe((response)=>{
        let token:string = response.response;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("is_admin", "true");
        this.router.navigateByUrl("admin/dashboard");
      });
    }else{
      this.msg = "`Invalid credentials";
    }
  }

  
}
