import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatMenuModule,
  MatIconModule, MatInputModule, MatTableModule,
  MatFormFieldModule, MatCardModule, MatTabsModule,
  MatPaginatorModule, MatButtonToggleModule, 
  MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatSnackBarModule, MatStepperModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';
import { AddPeopleComponent } from './home/people/add-people/add-people.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CheckpointComponent,
    PeopleComponent,
    AddPeopleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [PeopleComponent, AddPeopleComponent]  
})
export class AppModule { }
