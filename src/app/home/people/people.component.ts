import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { AddPeopleComponent } from './add-people/add-people.component';
import { Person } from '../../../models/Person';
import { DataService } from 'src/app/data/data.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email'];
    dataSource = new MatTableDataSource();

    constructor(
        private dataService: DataService,
        public dialog: MatDialog
    ) { }

    @ViewChild(MatTable) table: MatTable<Person>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
        console.log('Initialisation people ...');
        this.dataSource.paginator = this.paginator;
        this.dataService.getPersons().subscribe(result => {
            this.dataSource = new MatTableDataSource<Person>(result.data);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialogAddPeople(): void {
        const dialogRef = this.dialog.open(AddPeopleComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(entry => {
            if (entry !== null) {
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
            }
            console.log('The dialog should have closed.');
        });
    }

    refresh() {
        this.dataService.getLatest().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
                this.dataSource.data.push(result.data);
                this.table.renderRows();
                console.log('Table should have rendered.');
            }
        });
    }
}
