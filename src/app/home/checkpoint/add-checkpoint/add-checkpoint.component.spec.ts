import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckpointComponent } from './add-checkpoint.component';

describe('AddCheckpointComponent', () => {
  let component: AddCheckpointComponent;
  let fixture: ComponentFixture<AddCheckpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheckpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
