import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { Person, PersonView } from '../../../../models/Person';
import { PersonService } from 'src/services/person/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-checkpoint',
    templateUrl: './detail-checkpoint.component.html',
    styleUrls: ['./detail-checkpoint.component.css']
})
export class DetailCheckpointComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email', 'position'];
    dataSource = new MatTableDataSource();
    checkpointId = 0;

    constructor(
        private route: ActivatedRoute,
        private personService: PersonService,
        public dialog: MatDialog
    ) { }

    @ViewChild(MatTable) table: MatTable<Person>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.checkpointId = this.route.snapshot.params.id;

        console.log('Initialisation checkpoint detail ...');
        console.log(this.checkpointId);

        this.dataSource.paginator = this.paginator;

        this.personService.getAllByCheckpoint(this.checkpointId).subscribe(result => {
            this.dataSource = new MatTableDataSource<PersonView>(result.data);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
