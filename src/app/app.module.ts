import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDatepickerModule, MatTabsModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';
import { AddPeopleComponent } from './home/people/add-people/add-people.component';
import { DataService } from './data/data.service';
import {AddCheckpointComponent} from "./home/checkpoint/add-checkpoint/add-checkpoint.component";
import { DetailCheckpointComponent } from './home/checkpoint/detail-checkpoint/detail-checkpoint.component';
import { DeletePeopleComponent } from './home/people/delete-people/delete-people.component';
import { DeleteCheckpointComponent } from './home/checkpoint/delete-checkpoint/delete-checkpoint.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        CheckpointComponent,
        AddCheckpointComponent,
        PeopleComponent,
        AddPeopleComponent,
        DetailCheckpointComponent,
        DeletePeopleComponent,
        DeleteCheckpointComponent,

    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatTabsModule,
  ],
    bootstrap: [AppComponent],
    providers: [
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
        DataService
    ],
    entryComponents: [PeopleComponent, AddPeopleComponent, DeletePeopleComponent, CheckpointComponent, AddCheckpointComponent, DeleteCheckpointComponent]
})

export class AppModule { }
