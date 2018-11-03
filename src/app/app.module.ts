import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CatalogueRoutingModule } from './routing';
import { AppMaterialModule } from './material/app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesModule } from './categories/categories.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReportingComponent } from './reporting/reporting.component';

import { ApiService } from '../app/services/api.service';
import { CategoryService } from '../app/services/category.service';
import { ProductsService } from '../app/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReportingComponent
  ],
  imports: [
    BrowserModule,
    CategoriesModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(CatalogueRoutingModule, { useHash: false })
  ],
  providers: [
    ApiService,
    CategoryService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
