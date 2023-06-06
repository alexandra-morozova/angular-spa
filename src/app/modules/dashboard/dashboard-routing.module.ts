import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: FeaturedComponent
      },
      {
        path: 'film', redirectTo: ''
      }, 
      {
        path: 'show', redirectTo: ''
      }, 
      {
        path: 'series', redirectTo: ''
      },
      {
        path: 'film-details',
        component: FilmDetailsComponent
      }, 
      {
        path: 'results',
        component: SearchResultsComponent
      }
    ]
  }, 
  // {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
