import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import {Presence, PresenceView} from '../../../../models/Presence';
import { PersonService } from 'src/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import {AddPeopleComponent} from "../../people/add-people/add-people.component";
import {AddPeopleToCheckpointComponent} from "./add-people-to-checkpoint/add-people-to-checkpoint.component";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-detail-checkpoint',
    templateUrl: './detail-checkpoint.component.html',
    styleUrls: ['./detail-checkpoint.component.css']
})
export class DetailCheckpointComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'checktime'];
    dataSource = new MatTableDataSource();
    checkpointId = 0;
    tabPresence: Presence[] = [];

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
    const dialogRef = this.dialog.open(AddPeopleToCheckpointComponent, { width: '80%', maxWidth:'700px', minWidth:'250px',
      data: {checkpoint_id: this.checkpointId}
      });

    dialogRef.afterClosed().subscribe(entry => {
      if (entry !== null) {
        for(var value of entry){


          var presence: Presence = {
            presence_id_person: value.toString(),
            presence_id_checkpoint: this.checkpointId.toString()
          };


          this.tabPresence.push(presence);

          this.personService.addPeopleToCheckpoint(presence).subscribe(result => {
            if (result.status === 'success') {
              console.log(result);
            }
          });

        }

        for(let v of this.tabPresence){
          this.refreshAfterAdd(v.presence_id_person, v.presence_id_checkpoint);
        }

      }
      console.log('The dialog should have closed.');
    });

  }

  refreshAfterAdd(idP: string, idCP: string) {
    this.personService.getLastPresence(idP, idCP).subscribe(result => {
      if (result.status === 'not_modified' || result.status === 'success') {
        // @ts-ignore
        this.dataSource.data.push(result.data);
        this.table.renderRows();
        console.log('Table should have rendered.');
      }
    });
  }
}
