import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router:Router,public toastCtrl:ToastService) { }

  // set JWT Token
  setToken(value:any,remember:any){
    if(remember)
    {
    localStorage.setItem('ACCESS_TOKEN',value);
    }
    else
    {
      sessionStorage.setItem('ACCESS_TOKEN',value);
    }
  }

// clear JWT Token
  clearStorage(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/login');

  }

    // get JWT Token
    getToken(){
      if(localStorage.getItem('ACCESS_TOKEN') || sessionStorage.getItem('ACCESS_TOKEN') )
      {
        return localStorage.getItem('ACCESS_TOKEN') || sessionStorage.getItem('ACCESS_TOKEN');
      }
      else
      {
      return null;
      }
    }

//get Decoded Data from JWT Token
  getDecodedDetails(){
    var details=this.decodeToken(this.getToken());
    return  details ? details : null;
  }

  decodeToken(token:any){
    try{
    const helper= new JwtHelperService();
    if(token)
    {
         var decodedToken = helper.decodeToken(token);
         if(decodedToken?.unique_name==localStorage.getItem('username'))
         {
          return decodedToken;
         }
         else
         {
          this.toastCtrl.presentToast('',"session expired to reset please login",'');
           this.clearStorage();
         }
    }
    else
    {
      return null;
    }
    }
    catch(ex)
    {
      this.toastCtrl.presentToast(' ',"Unexpected technical damage acquired to reset please login",'');
      this.clearStorage();
    }
  }

}
