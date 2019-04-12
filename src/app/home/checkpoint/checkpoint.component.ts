import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { HttpClient } from '@angular/common/http';

export interface Checkpoint {
  checkpoint_id: number;
  checkpoint_description: string;
  checkpoint_start_date: string;
  checkpoint_end_date: string;
}

const CP_DATA: Checkpoint[] = [];

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent implements OnInit {

  displayedColumns: string[] = ['id', 'descript', 'start', 'end'];
  dataSource = new MatTableDataSource<Checkpoint>(CP_DATA);

  constructor(public route: Router, private httpClient: HttpClient) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    console.log("Initialisation checkpoint ...");
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
