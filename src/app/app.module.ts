import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsapiserviceService } from './service/newsapiservice.service';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopHeadlinesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
