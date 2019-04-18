import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Person_add_edit, Person } from './../../../../models/Person';

@Component({
    selector: 'app-add-checkpoint',
    templateUrl: './add-checkpoint.component.html',
    styleUrls: ['./add-checkpoint.component.css']
})

export class AddCheckpointComponent implements OnInit {

    messageSnackBar: string;
    actionSnackBar: string;
    FormPersonName: FormGroup;
    FormPersonContact: FormGroup;

    /*newPerson: Person_add_edit = {
        person_first_name: '',
        person_last_name: '',
        person_mail: '',
        person_phone: ''
    };*/

    constructor(
        @Inject(MAT_DIALOG_DATA) public person: Person,
        private dialogRef: MatDialogRef<AddCheckpointComponent>,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) { }

    description = new FormControl('', [Validators.required]);
    sdate = new FormControl('', [Validators.required]);
    edate = new FormControl('', [Validators.required]);

    getRequiredMessage() {
        return 'You must enter a value';
    }

    ngOnInit() {
        this.FormPersonName = this.formBuilder.group({
            description: ['', Validators.required]
        });
        this.FormPersonContact = this.formBuilder.group({
            picker1: ['', Validators.required],
            picker2: ['', Validators.required]
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

  submitCheckpoint() {
    this.person.person_mail = this.FormPersonContact.get('email').value;
    this.person.person_phone = this.FormPersonContact.get('phone').value;
    this.dialogRef.close(this.person);
  }
}
