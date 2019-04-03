import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatMenuModule,
  MatIconModule, MatInputModule, MatTableModule,
  MatFormFieldModule, MatCardModule, MatTabsModule,
  MatPaginatorModule, MatButtonToggleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CheckpointComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
