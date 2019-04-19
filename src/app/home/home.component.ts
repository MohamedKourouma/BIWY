import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  lastUpdate = new Promise
  ((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        },2000
      );
    }
  );
    constructor(public route: Router, private local: LocalStorageService) { }

    ngOnInit() {
        console.log("Initialisation home ...");
    }

    logout() {
        this.local.remove('currentUser');
        this.route.navigate(['/login']);
    }
}
