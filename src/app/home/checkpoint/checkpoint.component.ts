import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { HttpClient } from '@angular/common/http';
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


  constructor(
    public route: Router,
    private httpClient: HttpClient,
    private dataService: DataService
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
