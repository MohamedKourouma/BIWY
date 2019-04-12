import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatTableDataSource} from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import {Person_add_edit, PersonResult} from './../../../../models/Person';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = '/api/persons';

@Component({
    selector: 'app-add-people',
    templateUrl: './add-people.component.html',
    styleUrls: ['./add-people.component.css']
})



export class AddPeopleComponent implements OnInit {

    messageSnackBar: string;
    actionSnackBar: string;
    FormPersonName: FormGroup;
    FormPersonContact: FormGroup;
    FormPicture: FormGroup;

    new_person: Person_add_edit = {
      person_first_name: '',
      person_last_name: '',
      person_mail: '',
      person_phone:''
};

    constructor(public route: Router, private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddPeopleComponent>, private snackBar: MatSnackBar, private httpClient: HttpClient) { }

    firstName = new FormControl('', [Validators.required]);
    lastName = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    phone = new FormControl('', [Validators.required]);

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value test' :
            this.email.hasError('email') ? 'You must enter a valid email' : '';
    }

    getRequiredMessage() {
        return 'You must enter a value';
    }

    ngOnInit() {
        this.FormPersonName = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
        this.FormPersonContact = this._formBuilder.group({
            email: ['', Validators.email],
            phone: ['', Validators.required]
        });
        this.FormPicture = this._formBuilder.group({
            picture: ['', Validators.required]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addPeopleInput() {
        this.save();
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    save(){
      this.new_person.person_first_name = this.FormPersonName.get('firstName').value;
      this.new_person.person_last_name = this.FormPersonName.get('lastName').value;
      this.new_person.person_mail = this.FormPersonContact.get('email').value;
      this.new_person.person_phone = this.FormPersonContact.get('phone').value;


      console.log('New Person :' + this.new_person);


      this.httpClient
        .get<PersonResult>(baseUrl)
        .subscribe(res => {
          console.log(res);
          this.httpClient
            .post<PersonResult>(baseUrl, this.new_person)
            .subscribe(res => {
                if(res.status === 'success'){
                  this.messageSnackBar = 'Person added successfully';
                  this.actionSnackBar = 'Close';
                  this.openSnackBar(this.messageSnackBar, this.actionSnackBar);
                  this.onNoClick();
                  this.route.navigateByUrl('/home', {skipLocationChange: true}).then(()=>
                    this.route.navigate(['/home/(sidenav:person)']));
                }
            });
        },
          error => {
          console.log('Saving failed');
            this.messageSnackBar = 'Person saving failed';
            this.actionSnackBar = 'Close';
            this.openSnackBar(this.messageSnackBar, this.actionSnackBar);
          });

    }
}
