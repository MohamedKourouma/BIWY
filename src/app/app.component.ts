import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

    title = 'Biwy';

    constructor(public router: Router, private local: LocalStorageService) {
        const currentUser = JSON.parse(local.get('currentUser'));
        if (!currentUser || currentUser.status !== 'connected') {
            this.router.navigate(['/login']);
        }
    }
}
