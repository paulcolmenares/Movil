import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';;
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {   ReactiveFormsModule } from '@angular/forms';
import { AutenticadorInterceptor } from './autenticador.interceptor';
import { MenuGuard } from './menu.guard';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent,
    FilterPipe],
 
  imports: [
    BrowserModule, 
    HttpClientModule,
     AppRoutingModule,
      ReactiveFormsModule,
      
    IonicModule.forRoot(),   
  ],
  providers: [ 
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: AutenticadorInterceptor,multi: true },
    MenuGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
