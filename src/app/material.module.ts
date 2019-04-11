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
    MatTabsModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatStepperModule
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
        MatTabsModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatStepperModule
    ]
})
export class MaterialModule { }
