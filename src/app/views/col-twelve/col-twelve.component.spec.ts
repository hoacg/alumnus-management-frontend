import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColTwelveComponent } from './col-twelve.component';

describe('ColTwelveComponent', () => {
  let component: ColTwelveComponent;
  let fixture: ComponentFixture<ColTwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
