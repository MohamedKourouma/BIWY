import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { AddPeopleComponent } from './add-people/add-people.component';
import {Person, PersonView, PersonViewResult} from '../../../models/Person';
import { DataService } from 'src/app/data/data.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email', 'position', 'action'];
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
            this.dataSource = new MatTableDataSource<PersonView>(result.data);
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
        this.dataService.getLatestPerson().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
                // @ts-ignore
              this.dataSource.data.push(result.data);
                this.table.renderRows();
                console.log('Table should have rendered.');
            }
        });
    }

  consultItem(itemId: any){
    console.log('Consult item with id : ' + itemId);
  }

  editItem(item: any){
    console.log('Edit item : ' + item);
  }

  deleteItem(itemId: any){
    console.log('Delete item with id : ' + itemId);
  }
}
