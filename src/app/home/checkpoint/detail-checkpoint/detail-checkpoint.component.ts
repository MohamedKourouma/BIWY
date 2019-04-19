import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import {Person, PersonView, PersonViewResult} from '../../../../models/Person';
import { DataService} from "../../../data/data.service";

@Component({
  selector: 'app-detail-checkpoint',
  templateUrl: './detail-checkpoint.component.html',
  styleUrls: ['./detail-checkpoint.component.css']
})
export class DetailCheckpointComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email', 'position'];
  dataSource = new MatTableDataSource();
  checkpoint_id: number = 0;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {

  }

  @ViewChild(MatTable) table: MatTable<Person>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
      console.log('Initialisation checkpoint detail ...');

      this.dataSource.paginator = this.paginator;


      this.dataService.getPersonsByCheckpoint(this.checkpoint_id).subscribe(result => {
        this.dataSource = new MatTableDataSource<PersonView>(result.data);
      });


    }


    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


}
