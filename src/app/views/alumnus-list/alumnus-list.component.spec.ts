import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusListComponent } from './alumnus-list.component';

describe('AlumnusListComponent', () => {
  let component: AlumnusListComponent;
  let fixture: ComponentFixture<AlumnusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
