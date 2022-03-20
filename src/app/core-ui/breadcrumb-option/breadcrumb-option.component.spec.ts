import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbOptionComponent } from './breadcrumb-option.component';

describe('BreadcrumbOptionComponent', () => {
  let component: BreadcrumbOptionComponent;
  let fixture: ComponentFixture<BreadcrumbOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
