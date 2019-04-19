import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-delete-people',
  template: 'passed in {{ data.itemId }}',
  templateUrl: './delete-people.component.html',
  styleUrls: ['./delete-people.component.css']
})

export class DeletePeopleComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<DeletePeopleComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
     }

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close();
  }
  
  delete(){
    this.dialogRef.close(this.data.itemId);
  }

}
