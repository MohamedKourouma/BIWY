import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface Checkpoint {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: Checkpoint[] = [
    { position: 1, name: 'Batiment 1', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'A22 Salle 306', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'A12 Salle 1', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'A21 Accueil', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'A9 Amphi 2', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'A28 RDC', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'A15 Salle 8', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'A21 107', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'A33 RDC', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Hell room', weight: 20.1797, symbol: 'Ne' },
];

@Component({
    selector: 'app-checkpoint',
    templateUrl: './checkpoint.component.html',
    styleUrls: ['./checkpoint.component.css']
})

export class CheckpointComponent implements OnInit {

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<Checkpoint>(ELEMENT_DATA);

    constructor(public route: Router) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
        console.log("Initialisation checkpoint ...");
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
