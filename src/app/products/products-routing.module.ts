import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductAddComponent } from './add/product-add.component';
import { ProductsListComponent } from './list/products-list.componet';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
        pathMatch: 'full',
        children: [
          {
            path: '',
            component: ProductsListComponent
          },
          {
            path: 'add',
            component: ProductAddComponent,
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule {
}
