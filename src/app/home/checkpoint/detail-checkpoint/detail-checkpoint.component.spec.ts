import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCheckpointComponent } from './detail-checkpoint.component';

describe('DetailCheckpointComponent', () => {
    let component: DetailCheckpointComponent;
    let fixture: ComponentFixture<DetailCheckpointComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailCheckpointComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailCheckpointComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
