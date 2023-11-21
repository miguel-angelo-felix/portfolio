import { Routes, RouterModule } from '@angular/router';
import { CategoriesHomeComponent } from './page/categories-home/categories-home.component';

export const CATEGORIES_ROUTES: Routes = [
  { 
    path: '',
    component: CategoriesHomeComponent
  },
 
];

export const CategoriesRoutes = RouterModule.forChild(CATEGORIES_ROUTES);
