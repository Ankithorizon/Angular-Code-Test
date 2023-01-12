import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { RemoteApiComponent } from './remote-api/remote-api.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { PagingComponent } from './paging/paging.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CounterComponent,
    RemoteApiComponent,
    FormSubmitComponent,
    PagingComponent,
    MasterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
