import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationsComponent } from '../registrations/registrations.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path:"",component:LoginComponent },
  { path:"registrations",component:RegistrationsComponent },
  { path:"login",component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
