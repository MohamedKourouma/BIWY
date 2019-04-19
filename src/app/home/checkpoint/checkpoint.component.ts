import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatPaginator, MatDialog, MatTable} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Checkpoint, CPResult } from "../../../models/Checkpoint";
import { AddCheckpointComponent } from "./add-checkpoint/add-checkpoint.component";
import { DataService } from "../../data/data.service";
import {Person, PersonView} from "../../../models/Person";

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
    constructor(
        private dataService: DataService,
        public route: Router,
        private httpClient: HttpClient,
        public dialog: MatDialog
    ) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Checkpoint>;
    ngOnInit() {
        console.log("Initialisation checkpoint ...");
        this.dataSource.paginator = this.paginator;

        this.dataService.getCheckpoints().subscribe(result => {
          this.dataSource = new MatTableDataSource<Checkpoint>(result.data);
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
            if (entry !== null) {
              console.log(
                'Checkpoint {' + entry.checkpoint_description
                + ', ' + entry.checkpoint_start_date
                + ', ' + entry.checkpoint_end_date
                + '}'
              );
              this.dataService.addCheckpoint(entry).subscribe(result => {
                if (result.status === 'success') {
                  this.refresh();
                }
              });
            }
            console.log('The dialog should have closed.');
        });
    }

  refresh() {
    this.dataService.getLatestCheckpoint().subscribe(result => {
      if (result.status === 'not_modified' || result.status === 'success') {
        // @ts-ignore
        this.dataSource.data.push(result.data);
        this.table.renderRows();
        console.log('Table should have rendered.');
      }
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
