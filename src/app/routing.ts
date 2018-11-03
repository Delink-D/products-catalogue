import { Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { CategoriesComponent} from './categories/categories.component';
import { ProductsComponent} from './products/products.component';
import { ReportingComponent} from './reporting/reporting.component';

export const CatalogueRoutingModule: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'reporting',
    component: ReportingComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];
