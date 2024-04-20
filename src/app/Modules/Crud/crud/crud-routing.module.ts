import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '../Components/grid/grid.component';
import { EditComponent } from '../Components/edit/edit.component';

const routes: Routes = [
  { path:"",component:GridComponent },
  { path:"edit/:id",component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
