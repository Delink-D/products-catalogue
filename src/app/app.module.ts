import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CatalogueRoutingModule } from './routing';
import { AppMaterialModule } from './material/app.material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReportingComponent } from './reporting/reporting.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReportingComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(CatalogueRoutingModule, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
