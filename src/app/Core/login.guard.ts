import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';



@Injectable({
  providedIn: 'root'
})

export class loginGuard  {
  constructor(private auth:AuthService,private location:Location){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.auth.getDecodedDetails())
      {
        this.location.back();
        return false;
      }
      else
      {
        return true;
      };
  }
};
