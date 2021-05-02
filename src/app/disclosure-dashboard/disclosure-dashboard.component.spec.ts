import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureDashboardComponent } from './disclosure-dashboard.component';

describe('DisclosureDashboardComponent', () => {
  let component: DisclosureDashboardComponent;
  let fixture: ComponentFixture<DisclosureDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclosureDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclosureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
