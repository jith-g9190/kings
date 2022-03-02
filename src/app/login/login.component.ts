import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  uname=""
  pswd=""

  loginForm = this.fb.group({
   uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder ,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let uname=this.loginForm.value.uname
    let pswd=this.loginForm.value.pswd
    let checkData = localStorage.getItem(uname)
    
    
    let data = checkData? JSON.parse(localStorage.getItem(uname)|| '') : ''
    
    
    if(checkData){
      if(uname== data.uname){
        if(pswd==data.pswd){
          localStorage.setItem('username',data.uname)
           this.router.navigateByUrl('dashboard')
        }
        else{
          alert("invalid password")
        }
      }
      else{
        alert("invalid username")
      }
    }
    else{
      alert("invalid")
    }
    
  }
  
}
