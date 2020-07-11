import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import {AlumnusListComponent} from "./views/alumnus-list/alumnus-list.component";
import {AlumniFormComponent} from "./views/alumni-form/alumni-form.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'alumnus',
        component: AlumnusListComponent
      },
      {
        path: 'alumnus-add',
        component: AlumniFormComponent
      },
      {
        path: 'alumnus-edit/:id',
        component: AlumniFormComponent
      }
    ]
  },
  { path: '**', component: DefaultLayoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
