import {Component, Inject, OnInit} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Person, PersonView } from '../../../../../models/Person';
import { PersonService } from 'src/services/person/person.service';
import {Presence} from "../../../../../models/Presence";



@Component({
  selector: 'app-add-people-to-checkpoint',
  templateUrl: './add-people-to-checkpoint.component.html',
  styleUrls: ['./add-people-to-checkpoint.component.css']
})
export class AddPeopleToCheckpointComponent implements OnInit {

  dataSource: any;
  people: any;
  selectedOptions;

  constructor(
    @Inject(MAT_DIALOG_DATA) public presences: Presence[],
    private dialogRef: MatDialogRef<AddPeopleToCheckpointComponent>,
    private personService: PersonService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.personService.getAll().subscribe(result => {
      this.dataSource = result.data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  public addPeople() {

    console.log(this.selectedOptions);
    this.dialogRef.close(this.selectedOptions);
    this.snackBar.open('People added sucessfully');
  }


}
