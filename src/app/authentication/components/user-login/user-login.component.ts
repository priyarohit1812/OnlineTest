import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  msg:string="";
  loginFrom = this.builder.group({
    username: this.builder.control('',[Validators.required]),
    password: this.builder.control('',[Validators.required])
  });

  loginRequest: any = {
    username: "",
    password: ""
  };
  
  
  
  constructor(private builder:FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginFrom.valueChanges.subscribe((r)=>{
      this.loginRequest.username = r.username;
      this.loginRequest.password = r.password;
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
    if (this.loginFrom.valid) {
      this.authService.userLogin(this.loginRequest).subscribe((response)=>{
        let token:string = response.response;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("is_admin", "false");
        this.router.navigateByUrl("user/dashboard");
      });
    }else{
      this.msg = "`Invalid credentials";
    }
  }

  
}
