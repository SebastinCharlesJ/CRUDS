import { Routes } from '@angular/router';
import { loginGuard } from './Core/login.guard';
import { AuthGuard } from './Core/auth.guard';
import { logiGuard } from './Core/logi.guard';

export const routes: Routes = [

  {
    path:"registration",
    loadChildren:()=>import("../app/Modules/Login/registration/registration.module").then(l=>l.RegistrationModule),
    canActivate:[logiGuard]
  },
  {
    path:"",
    redirectTo:"/registration",
    pathMatch:"full"
  },
  {
    path:"crud",
    loadChildren:()=>import("../app/Modules/Crud/crud/crud.module").then(m=>m.CrudModule),
    canActivate:[AuthGuard]
  },
  {
    path:"**",
    redirectTo:"/crud"
  }
];
