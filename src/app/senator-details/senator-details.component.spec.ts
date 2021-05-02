import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorDetailsComponent } from './senator-details.component';

describe('SenatorDetailsComponent', () => {
  let component: SenatorDetailsComponent;
  let fixture: ComponentFixture<SenatorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenatorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
