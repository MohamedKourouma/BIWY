import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTooltipModule
    ]
})
export class MaterialModule { }
