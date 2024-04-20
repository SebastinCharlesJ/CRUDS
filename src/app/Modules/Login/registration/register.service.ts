import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http:HttpClient) { }

  //Insert User Details
  insertUserDetails(Data:FormGroup){
    return this.http.post("https://localhost:44346/api/userDetails/Add User Details",Data);
  }

  //User Login
  userLogin(email:any,password:any){
    return this.http.get("https://localhost:44346/api/userDetails/User Authentication?email="+email+"&password="+password)
  }

}
