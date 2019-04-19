import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Checkpoint, CPResult } from "../../../models/Checkpoint";
import { AddPeopleComponent } from "../people/add-people/add-people.component";
import { AddCheckpointComponent } from "./add-checkpoint/add-checkpoint.component";
import { DataService } from "../../data/data.service";
import {Checkpoint, CPResult} from "../../../models/Checkpoint";
import { DataService } from 'src/app/data/data.service';

const baseUrl: string = '/api/checkpoints';

@Component({
    selector: 'app-checkpoint',
    templateUrl: './checkpoint.component.html',
    styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent implements OnInit {

  displayedColumns: string[] = ['id', 'descript', 'start', 'end', 'action'];
  dataSource = new MatTableDataSource();
  checkpointId: any;
    displayedColumns: string[] = ['id', 'descript', 'start', 'end'];
    dataSource = new MatTableDataSource();


  constructor(
    public route: Router,
    private httpClient: HttpClient,
    private dataService: DataService
  ) { }
    constructor(
        private dataService: DataService,
        public route: Router,
        private httpClient: HttpClient,
        public dialog: MatDialog
    ) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        console.log("Initialisation checkpoint ...");
        this.dataSource.paginator = this.paginator;


        this.httpClient
          .get<CPResult>(baseUrl)
          .subscribe(res => {
            console.log(res);

            this.dataSource = new MatTableDataSource<Checkpoint>(res.data);
          },
            error => {
              console.log('Checkpoints loading failed');
            });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialogAddCheckpoint(): void {
        const dialogRef = this.dialog.open(AddCheckpointComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe(entry => {
            /*if (entry !== null) {
              console.log(
                'Person{' + entry.person_first_name
                + ', ' + entry.person_last_name
                + ', ' + entry.person_mail
                + ', ' + entry.person_phone
                + '}'
              );
              this.dataService.addPerson(entry).subscribe(result => {
                if (result.status === 'success') {
                  this.refresh();
                }
              });
            }*/
            console.log('The dialog should have closed.');
        });
    }


  consultItem(id){
    console.log('Consult item with id : ' + id);
    //this.route.navigate(['/home/detail-checkpoint']);
  }

    editItem(item: any){
      console.log('Edit item : ' + item);
    }

    deleteItem(itemId: any){
      console.log('Delete item with id : ' + itemId);
    }
}
