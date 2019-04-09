import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddPeopleComponent } from './add-people/add-people.component';

export interface Person {
  position: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

const ELEMENT_DATA: Person[] = [
  {position: 1, firstname: 'Abida', lastname: 'Faye', phone: '0798745632', email: 'abida.faye@mail.com'},
  {position: 2, firstname: 'Mohamed', lastname: 'Kourouma', phone: '0712345678', email: 'momo.kourouma@mail.com'},
  {position: 3, firstname: 'Tanguy', lastname: 'Maquinghen', phone: '0798745632', email: 'tanguy.maquinghen@mail.com'},
  {position: 4, firstname: 'Sylvain', lastname: 'Pelissier', phone: '0798745632', email: 'sylvain.pelissier@mail.com'},
  {position: 5, firstname: 'Frantz', lastname: 'Toussaint', phone: '0798745632', email: 'frantz.toussaint@mail.com'},
  {position: 6, firstname: 'Paul', lastname: 'Dupond', phone: '0798745632', email: 'paul.dupond@mail.com'},
  {position: 7, firstname: 'Pierre', lastname: 'Faye', phone: '0798745632', email: 'pierre.faye@mail.com'},
  {position: 8, firstname: 'Lucille', lastname: 'Meleiro', phone: '0798745632', email: 'lulu.mel@mail.com'},
  {position: 9, firstname: 'Marie', lastname: 'Dubier', phone: '0798745632', email: 'marie.dubier@mail.com'},
  {position: 10, firstname: 'Sarah', lastname: 'Le Marchand', phone: '0798745632', email: 'sarah.lm@mail.com'},
];

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'firstname', 'lastname', 'phone', 'email'];
  dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);

  constructor(public route: Router, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    console.log("Initialisation people ...");
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  openDialogAddPeople(): void {
    const dialogRef = this.dialog.open(AddPeopleComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
