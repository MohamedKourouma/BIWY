import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Checkpoint } from '../../../../models/Checkpoint';

@Component({
    selector: 'app-add-checkpoint',
    templateUrl: './add-checkpoint.component.html',
    styleUrls: ['./add-checkpoint.component.css']
})

export class AddCheckpointComponent implements OnInit {

    FormCheckpointDescription: FormGroup;
    FormCheckpointDate: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public checkpoint: Checkpoint,
        private dialogRef: MatDialogRef<AddCheckpointComponent>,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar
    ) { }

    description = new FormControl('', [Validators.required]);
    sdate = new FormControl('', [Validators.required]);
    edate = new FormControl('', [Validators.required]);

    getRequiredMessage() {
        return 'You must enter a value';
    }

    ngOnInit() {
        this.FormCheckpointDescription = this.formBuilder.group({
            description: ['', Validators.required]
        });
        this.FormCheckpointDate = this.formBuilder.group({
            sdate: ['', Validators.required],
            edate: ['', Validators.required]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }


    submitCheckpoint() {
        this.checkpoint.checkpoint_description = this.FormCheckpointDescription.get('description').value;
        this.checkpoint.checkpoint_start_date = this.FormCheckpointDate.get('sdate').value;
        this.checkpoint.checkpoint_end_date = this.FormCheckpointDate.get('edate').value;
        this.dialogRef.close(this.checkpoint);
        this.snackBar.open('Checkpoint saved sucessfully');
    }
}
