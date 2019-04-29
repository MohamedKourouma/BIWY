import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeopleToCheckpointComponent } from './add-people-to-checkpoint.component';

describe('AddPeopleToCheckpointComponent', () => {
  let component: AddPeopleToCheckpointComponent;
  let fixture: ComponentFixture<AddPeopleToCheckpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeopleToCheckpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeopleToCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
