import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.css'
})
export class RegistrationsComponent {

  addUsers!:FormGroup;
  submit:boolean=false;

  constructor(private formbuild:FormBuilder,private service:RegisterService,public route:Router){

    this.addUsers = this.formbuild.group({
      Name:['',Validators.required],
      Email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
      Mobile:['',[Validators.required,Validators.minLength(10)]],
      Gender:['',Validators.required],
      Password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  AddUserDetails(){
    this.submit = true;

    if(this.addUsers.invalid){
      return;
    }
    else{
      this.service.insertUserDetails(this.addUsers.value).subscribe(res=>{
       if(res == 1){
        alert("Registration Successfully");
        this.route.navigate(['/registration/login']);
       }
      })
    }
  }

}
