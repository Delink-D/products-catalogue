import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../material/app.material.module';

import { ProductsComponent } from './products.component';
import { ProductAddComponent } from './add/product-add.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent, DeleteProductDialogComponent } from './list/products-list.componet';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductsListComponent,
    DeleteProductDialogComponent
  ],
  entryComponents: [DeleteProductDialogComponent]
})
export class ProductsModule { }
