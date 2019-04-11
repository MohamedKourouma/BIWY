import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';
import { AddPeopleComponent } from './home/people/add-people/add-people.component';
import { MaterialModule } from './material.module';


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
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
    ],
    entryComponents: [PeopleComponent, AddPeopleComponent]
})
export class AppModule { }
