import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  uname=""
  pswd=""

  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    let uname = this.registerForm.value.uname
    let pswd = this.registerForm.value.pswd
    
    let data = {
      uname,
      pswd
    }
    
    localStorage.setItem(data.uname,JSON.stringify(data))
    this.router.navigateByUrl('')
    
  
  }

}
