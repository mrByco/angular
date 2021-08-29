import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ChallengerComponent } from './root/challenger/challenger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule} from "@angular/forms";
import {ChallengeService} from "./services/challenge-service/challenge.service";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ChallengerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatSliderModule,
    MatOptionModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
