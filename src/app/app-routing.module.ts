import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { RemoteApiComponent } from './remote-api/remote-api.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { PagingComponent } from './paging/paging.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'remote-api', component: RemoteApiComponent },
  { path: 'form-submit', component: FormSubmitComponent },
  { path: 'paging', component: PagingComponent },
  { path: 'master-detail', component: MasterDetailComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
