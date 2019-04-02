import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedTab = 0;

  constructor(public route: Router, private local: LocalStorageService) {
    let currentUser = JSON.parse(local.get('currentUser'));
    if(!currentUser || currentUser.status != 'connected') {
      this.logout();
    }

  }

  ngOnInit() {
        console.log("Initialisation home ...");
  }


  logout() {
    this.local.remove('currentUser');
    this.route.navigate(['/login']);
  }

  selectTab(event) {
    this.selectedTab = event;
  }

}
