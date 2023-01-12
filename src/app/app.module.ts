import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { RemoteApiComponent } from './remote-api/remote-api.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { PagingComponent } from './paging/paging.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

// services
import { DataService } from './services/data.service';
import { LocalDataService } from './services/local-data.service';


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
    AppRoutingModule,
    FormsModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LocalDataService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
