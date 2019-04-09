import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPeopleComponent>) {}

  
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getRequiredMessage(){
    return 'You must enter a value';
  }

  ngOnInit() {
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }


}
