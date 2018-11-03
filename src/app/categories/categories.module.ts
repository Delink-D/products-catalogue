import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../material/app.material.module';

import { CategoriesComponent } from './categories.component';
import { FacilitiesRoutingModule } from './categories-routing.module';
import { CategoryListComponent, DeleteCategoryDialogComponent } from './list/category-list.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FacilitiesRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    DeleteCategoryDialogComponent
  ],
  entryComponents: [DeleteCategoryDialogComponent]
})
export class CategoriesModule { }
