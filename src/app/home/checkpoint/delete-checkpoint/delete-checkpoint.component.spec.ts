import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCheckpointComponent } from './delete-checkpoint.component';

describe('DeleteCheckpointComponent', () => {
    let component: DeleteCheckpointComponent;
    let fixture: ComponentFixture<DeleteCheckpointComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeleteCheckpointComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteCheckpointComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
