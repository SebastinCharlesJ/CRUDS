import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Location } from '@angular/common';

export const logiGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService);
  var locat = inject(Location)
  if(authservice.getDecodedDetails()){
    locat.back();
    return false;
  }
  else
  {
    return true;
  };
};
