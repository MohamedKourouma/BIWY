import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';
import { AddPeopleComponent } from './home/people/add-people/add-people.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'checkpoint', component: CheckpointComponent },
{ path: 'people', component: PeopleComponent },
{ path: 'add-people', component: AddPeopleComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
