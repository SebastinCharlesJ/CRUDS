import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authsGuard: CanActivateFn = (route, state) => {
  const authservice = inject(AuthService);
  if(authservice.getDecodedDetails()){
    return false;
  }
  else
  {
    return true;
  };
};
