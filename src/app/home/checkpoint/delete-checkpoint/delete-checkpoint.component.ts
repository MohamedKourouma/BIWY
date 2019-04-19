import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-checkpoint',
  template: 'passed in {{ data.itemId }}',
  templateUrl: './delete-checkpoint.component.html',
  styleUrls: ['./delete-checkpoint.component.css']
})
export class DeleteCheckpointComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<DeleteCheckpointComponent>, 
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
