import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddPeopleComponent } from './add-people/add-people.component';
import { HttpClient } from '@angular/common/http';
import {Person, PersonResult } from "../../../models/Person";

const baseUrl: string = '/api/persons';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email'];
    dataSource = new MatTableDataSource();

    constructor(public route: Router, public dialog: MatDialog, private httpClient: HttpClient) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
        console.log("Initialisation people ...");
        this.dataSource.paginator = this.paginator;

      this.httpClient
        .get<PersonResult>(baseUrl)
        .subscribe(res => {
          console.log(res);
          this.dataSource = new MatTableDataSource<Person>(res.data);
        },
          error => {
            console.log('Persons loading failed');
          });
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
