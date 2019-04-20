import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';
import { DetailCheckpointComponent } from './home/checkpoint/detail-checkpoint/detail-checkpoint.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: '/home/checkpoint', pathMatch: 'full' },
            { path: 'checkpoint', component: CheckpointComponent },
            { path: 'checkpoint/:id', component: DetailCheckpointComponent },
            { path: 'person', component: PeopleComponent },
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
