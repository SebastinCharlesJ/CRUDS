import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { GridComponent } from '../Components/grid/grid.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditComponent } from '../Components/edit/edit.component';


@NgModule({
  declarations: [GridComponent,EditComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatButtonModule,
    MatMenuModule,MatPaginatorModule,MatSortModule,MatTableModule,
    MatInputModule,MatFormFieldModule,MatIconButton,
    MatRadioModule,MatSelectModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
  ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class CrudModule { }
