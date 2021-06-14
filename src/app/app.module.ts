import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
