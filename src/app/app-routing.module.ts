import { NgModule } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckpointComponent } from './home/checkpoint/checkpoint.component';
import { PeopleComponent } from './home/people/people.component';
import {DetailCheckpointComponent} from "./home/checkpoint/detail-checkpoint/detail-checkpoint.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: '/home/(sidenav:checkpoint)', pathMatch: 'full' },
            { path: 'checkpoint', component: CheckpointComponent, outlet: 'sidenav' },
            { path: 'detail-checkpoint', component: DetailCheckpointComponent, outlet: 'sidenav' },
            { path: 'person', component: PeopleComponent, outlet: 'sidenav' }
        ]
    },
    { path: 'home/checkpoint', redirectTo: '/home/(sidenav:checkpoint)', pathMatch: 'full' },
    { path: 'home/checkpoint/detail', redirectTo: '/home/(sidenav:detail-checkpoint)', pathMatch: 'full' },
    { path: 'home/person', redirectTo: '/home/(sidenav:person)', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];

export class AppUrlSerializer extends DefaultUrlSerializer implements UrlSerializer {
    serialize(tree: UrlTree): string {
        return super.serialize(tree).replace(/\(|\)|\w+:/g, '');
    }
}

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        { provide: UrlSerializer, useClass: AppUrlSerializer }
    ]
})

export class AppRoutingModule { }
