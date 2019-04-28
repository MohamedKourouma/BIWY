import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { AddPeopleComponent } from './add-people/add-people.component';
import { Person, PersonView, PersonViewResult } from '../../../models/Person';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { PersonService } from 'src/services/person/person.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'phone', 'email', 'position', 'action'];
    dataSource = new MatTableDataSource();
    indexPop: number;

    constructor(
        private personService: PersonService,
        public dialog: MatDialog
    ) { }

    @ViewChild(MatTable) table: MatTable<Person>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
        console.log('Initialisation people ...');
        this.dataSource.paginator = this.paginator;
        this.personService.getAll().subscribe(result => {
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
                this.personService.addOne(entry).subscribe(result => {
                    if (result.status === 'success') {
                        this.refreshAfterAdd();
                    }
                });
            }
            console.log('The dialog should have closed.');
        });
    }

    refreshAfterAdd() {
        this.personService.getLast().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
                // @ts-ignore
                this.dataSource.data.push(result.data);
                this.table.renderRows();
                console.log('Table should have rendered.');
            }
        });
    }

    /*consultItem(itemId: any) {
        console.log('Consult item with id : ' + itemId);
    }

    editItem(item: any) {
        console.log('Edit item : ' + item);
    }*/

    deleteItem(itemId: number, i: number) {
        // console.log('Delete item with id : ' + itemId);
        this.indexPop = i;
        const dialogRef = this.dialog.open(DeletePeopleComponent, {
            data: { itemId: itemId }
        });
        dialogRef.afterClosed().subscribe(entry => {
            if (entry != null) {
                this.personService.removeOne(itemId).subscribe(result => {
                    if (result.status === 'success') {
                        console.log('Delete item with id : ' + itemId);
                        this.refreshAfterRemove();
                    }
                });
            }
        });
    }

    refreshAfterRemove() {
        this.personService.getLast().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
                // @ts-ignore
                this.dataSource.data.splice(this.indexPop, 1);
                this.table.renderRows();
                console.log('Table should have rendered.');
            }
        });
    }
}
