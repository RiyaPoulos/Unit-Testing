import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { PropertbindingComponent } from './propertbinding/propertbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CountcheckComponent } from './countcheck/countcheck.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PropertbindingComponent,
    EventbindingComponent,
    CountcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
