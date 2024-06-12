import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { PropertbindingComponent } from './propertbinding/propertbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CountcheckComponent } from './countcheck/countcheck.component';
import { SwitchexComponent } from './switchex/switchex.component';
import { StrengthPipe } from './strength.pipe';
import { PosComponent } from './pos/pos.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PropertbindingComponent,
    EventbindingComponent,
    CountcheckComponent,
    SwitchexComponent,
    StrengthPipe,
    PosComponent,
    PostComponent
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
