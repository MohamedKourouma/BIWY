import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { Checkpoint } from '../../../models/Checkpoint';
import { AddCheckpointComponent } from './add-checkpoint/add-checkpoint.component';
import { DeleteCheckpointComponent } from './delete-checkpoint/delete-checkpoint.component';
import { CheckpointService } from 'src/services/checkpoint/checkpoint.service';


@Component({
    selector: 'app-checkpoint',
    templateUrl: './checkpoint.component.html',
    styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent implements OnInit {

    displayedColumns: string[] = ['id', 'descript', 'start', 'end', 'action'];
    dataSource = new MatTableDataSource();
    indexPop: number;

    checkpointId: any;
    constructor(
        public route: Router,
        public dialog: MatDialog,
        private checkpointService: CheckpointService
    ) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatTable) table: MatTable<Checkpoint>;
    ngOnInit() {
        console.log('Initialisation checkpoint ...');
        this.dataSource.paginator = this.paginator;

        this.checkpointService.getAll().subscribe(result => {
            this.dataSource = new MatTableDataSource<Checkpoint>(result.data);
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialogAddCheckpoint(): void {
        const dialogRef = this.dialog.open(AddCheckpointComponent, {
            data: {}
        });
        dialogRef.afterClosed().subscribe(entry => {
            if (entry !== null) {
                console.log(
                    'Checkpoint {' + entry.checkpoint_description
                    + ', ' + entry.checkpoint_start_date
                    + ', ' + entry.checkpoint_end_date
                    + '}'
                );
                this.checkpointService.addOne(entry).subscribe(result => {
                    if (result.status === 'success') {
                        this.refreshAfterAdd();
                    }
                });
            }
            console.log('The dialog should have closed.');
        });
    }

    refreshAfterAdd() {
        this.checkpointService.getLast().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
                // @ts-ignore
                this.dataSource.data.push(result.data);
                this.table.renderRows();
                console.log('Table should have rendered.');
            }
        });
    }

    consultItem(id) {
        console.log('Consult item with id : ' + id);
    }

    editItem(item: any) {
        console.log('Edit item : ' + item);
    }

    deleteItem(itemId: number, i: number) {
        this.indexPop = i;
        const dialogRef = this.dialog.open(DeleteCheckpointComponent, {
            data: { itemId }
        });
        dialogRef.afterClosed().subscribe(entry => {
            if (entry != null) {
                this.checkpointService.removeOne(itemId).subscribe(result => {
                    if (result.status === 'success') {
                        console.log('Delete item with id : ' + itemId);
                        this.refreshAfterRemove();
                    }
                });
            }
        });
    }

    refreshAfterRemove() {
        this.checkpointService.getLast().subscribe(result => {
            if (result.status === 'not_modified' || result.status === 'success') {
                this.dataSource.data.splice(this.indexPop, 1);
                this.table.renderRows();
                console.log('Table should have rendered.');
            }
        });
    }
}
