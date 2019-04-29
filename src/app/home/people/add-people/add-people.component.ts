import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Person, ModalData } from './../../../../models/Person';

@Component({
    selector: 'app-add-people',
    templateUrl: './add-people.component.html',
    styleUrls: ['./add-people.component.css']
})

export class AddPeopleComponent implements OnInit {


    FormPersonName: FormGroup;
    FormPersonContact: FormGroup;
    FormPicture: FormGroup;
    selectedFile: File;
    fileSelected = false;


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

    onChange(event: any) {
        console.log('onChange');
        try {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile.name);
            this.fileSelected = true;
        } catch {
            this.fileSelected = false;
        }
    }

    public submitPerson() {
        this.person.person_first_name = this.FormPersonName.get('firstName').value;
        this.person.person_last_name = this.FormPersonName.get('lastName').value;
        this.person.person_mail = this.FormPersonContact.get('email').value;
        this.person.person_phone = this.FormPersonContact.get('phone').value;

        const modalData = { person: this.person, file: this.selectedFile } as ModalData;
        this.dialogRef.close(modalData);
        this.snackBar.open('Person saved sucessfully');
    }
}
