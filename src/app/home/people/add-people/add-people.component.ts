import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Person_add_edit, Person } from './../../../../models/Person';

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

    newPerson: Person_add_edit = {
        person_first_name: '',
        person_last_name: '',
        person_mail: '',
        person_phone: ''
    };

    constructor(
        @Inject(MAT_DIALOG_DATA) public person: Person,
        private dialogRef: MatDialogRef<AddPeopleComponent>,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) { }

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
        this.FormPersonName = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
        this.FormPersonContact = this.formBuilder.group({
            email: ['', Validators.email],
            phone: ['', Validators.required]
        });
        this.FormPicture = this.formBuilder.group({
            picture: ['', Validators.required]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    public submitPerson() {
        this.person.person_first_name = this.FormPersonName.get('firstName').value;
        this.person.person_last_name = this.FormPersonName.get('lastName').value;
        this.person.person_mail = this.FormPersonContact.get('email').value;
        this.person.person_phone = this.FormPersonContact.get('phone').value;
        this.dialogRef.close(this.person);
    }
}
