import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'heroes-list', pathMatch: 'full' },
  { path: 'heroes-list', component: HeroListComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
