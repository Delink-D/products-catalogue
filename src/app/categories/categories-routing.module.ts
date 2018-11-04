import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryAddComponent } from './add/category-add.component';
// import { FacilityEditComponent } from './edit/facility-edit.component';
import { CategoryListComponent } from './list/category-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesComponent,
        pathMatch: 'full',
        children: [
          {
            path: '',
            component: CategoryListComponent
          },
          {
            path: 'add',
            component: CategoryAddComponent,
          },
          {
            path: ':id',
            // component: FacilityEditComponent,
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesRoutingModule {
}
