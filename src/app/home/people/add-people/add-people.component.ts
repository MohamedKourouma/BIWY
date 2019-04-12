import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

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

    constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddPeopleComponent>, private snackBar: MatSnackBar) { }

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
        this.messageSnackBar = 'Access to the database';
        this.actionSnackBar = 'Close';
        this.openSnackBar(this.messageSnackBar, this.actionSnackBar);
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
