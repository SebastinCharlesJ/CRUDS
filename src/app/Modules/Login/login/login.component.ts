import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration/register.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin!:FormGroup;
  submit:boolean = false;

  constructor(private formbuild:FormBuilder,private service:RegisterService,public route:Router,
    private auth:AuthService
  ){
    this.userLogin = this.formbuild.group({
      Email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
      Password:['',[Validators.required,Validators.minLength(6)]]
    })
  }


  LoginUser(){
    this.submit = true;
    if(this.userLogin.invalid){
      return;
    }
    else{
      this.service.userLogin(this.userLogin.value.Email,this.userLogin.value.Password).subscribe((res:any)=>{
        if(res.value != "" || res.value != null){
          this.auth.setToken(res.token,"");
          localStorage.setItem("UserId",res.id);
          localStorage.setItem("UserName",res.name);
          console.log(res);

          this.route.navigate(['crud/grid'])
        }

      },(error)=>{
        console.log(error);
        alert("Invalid User");

      })

    }
  }
}
