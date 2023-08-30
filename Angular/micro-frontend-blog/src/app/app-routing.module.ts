import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomePageComponent } from './features/home-page/home-page.component';
import { CharactersPageComponent } from './features/characters-page/characters-page.component';

const routes: Routes = [
  {
    path: '', 
    component: HomePageComponent
  },
  {
    path: 'characters', 
    component: CharactersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
}
