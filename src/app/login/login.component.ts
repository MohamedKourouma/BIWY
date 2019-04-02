import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  pwd: string;
  status: string = 'not connected';
  error: string  = '';
  constructor(public route: Router, private local: LocalStorageService) {
    let user = JSON.parse(local.get('currentUser'));
    this.status = user && user.status;
  }

    ngOnInit() {
        console.log("Initialisation Login...");
        if(this.status == 'connected')
          this.route.navigate(['/home']);
    }

    login() {
      if(this.username == 'g6' && this.pwd == 'miage') {
        this.status = 'connected'
        this.local.set('currentUser', JSON.stringify({ user: this.username, status: this.status }))
        this.route.navigate(['/home']);

      }


      else
        this.error = 'Username or password is incorrect';
    }

}
