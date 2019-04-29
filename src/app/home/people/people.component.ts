import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { AddPeopleComponent } from './add-people/add-people.component';
import { Person, PersonView } from '../../../models/Person';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { PersonService } from 'src/services/person/person.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

    person: Person;
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
                    'Person{' + entry.person.person_first_name
                    + ', ' + entry.person.person_last_name
                    + ', ' + entry.person.person_mail
                    + ', ' + entry.person.person_phone
                    + '}'
                );
                this.personService.addOne(entry.person).subscribe(result => {
                    if (result.status === 'success') {
                        this.refreshAfterAdd(entry);
                    }
                });
            }
            console.log('The dialog should have closed.');
        });
    }

    // @ts-ignore
    refreshAfterAdd(entry: any) {
        this.personService.getLast().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
              // @ts-ignore
                this.dataSource.data.push(result.data);
                this.table.renderRows();
                console.log('Table should have rendered.');
                console.log(result.data);
                this.uploadImage(result.data, entry.file);
            }
        });
    }

    uploadImage(person: any, file: File) {
        console.log(person.person_id);
        const ext = file.name.substr(file.name.lastIndexOf('.'));
        const fileData = new FormData();
        const fileName = person.person_id + '_' + person.person_last_name + '_' + person.person_first_name + ext;
        fileData.append('photo', file, fileName);
        this.personService.addImage(fileData).subscribe(
            result => {
                console.log(result);
            }
        );
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
