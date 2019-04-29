import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { PresenceView } from '../../../../models/Presence';
import { PersonService } from 'src/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import {AddPeopleComponent} from "../../people/add-people/add-people.component";
import {AddPeopleToCheckpointComponent} from "./add-people-to-checkpoint/add-people-to-checkpoint.component";

@Component({
    selector: 'app-detail-checkpoint',
    templateUrl: './detail-checkpoint.component.html',
    styleUrls: ['./detail-checkpoint.component.css']
})
export class DetailCheckpointComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'checktime'];
    dataSource = new MatTableDataSource();
    checkpointId = 0;

    constructor(
        private route: ActivatedRoute,
        private personService: PersonService,
        public dialog: MatDialog
    ) { }

    @ViewChild(MatTable) table: MatTable<PresenceView>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.checkpointId = this.route.snapshot.params.id;

        console.log('Initialisation checkpoint detail ...');
        console.log(this.checkpointId);

        this.dataSource.paginator = this.paginator;

        this.personService.getAllByCheckpoint(this.checkpointId).subscribe(result => {
            this.dataSource = new MatTableDataSource<PresenceView>(result.data);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  openDialogAddPeople(): void {
      this.dialog.open(AddPeopleToCheckpointComponent, {
      data: {}
      });

  }
}
