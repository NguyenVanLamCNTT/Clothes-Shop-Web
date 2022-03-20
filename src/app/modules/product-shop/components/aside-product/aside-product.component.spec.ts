import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideProductComponent } from './aside-product.component';

describe('AsideProductComponent', () => {
  let component: AsideProductComponent;
  let fixture: ComponentFixture<AsideProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
