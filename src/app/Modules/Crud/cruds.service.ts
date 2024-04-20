import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudsService {

  constructor(public http:HttpClient) { }

  //Get By Id
  getCakeListById(Id:any){
    return this.http.get("https://localhost:44346/api/Cakes/GetCakeListById?Id="+Id)
  }

  //Insert Cake
  InsertCakes(Cakes:FormGroup){
    return this.http.post("https://localhost:44346/api/Cakes/InsertCakes",Cakes)
  }

  //Get Cake By Id
  GetCakeById(Id:any){
    return this.http.get("https://localhost:44346/api/Cakes/GetCakeById?Id="+Id);
  }

  //Update Cakes
  UpdateCakeList(Id:any,Dats:any){
    return this.http.put("https://localhost:44346/api/Cakes/UpdateCakeList?Id="+Id,Dats);
  }

  //Delete Cakes
  DeleteCake(Id:any){
    return this.http.delete("https://localhost:44346/api/Cakes/DeleteCake?Id="+Id);
  }

}
