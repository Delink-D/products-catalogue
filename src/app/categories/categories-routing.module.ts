import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
// import { FacilityAddComponent } from './add/facility-add.component';
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
            // component: FacilityAddComponent,
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
export class FacilitiesRoutingModule {
}
