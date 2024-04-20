import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private auth:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
      if(this.auth.getDecodedDetails())
      {

        return true;
      }
      else
      {
        this.auth.clearStorage();
        return false
      };
  }
}
