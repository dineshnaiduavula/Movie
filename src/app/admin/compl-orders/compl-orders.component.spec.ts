import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplOrdersComponent } from './compl-orders.component';

describe('ComplOrdersComponent', () => {
  let component: ComplOrdersComponent;
  let fixture: ComponentFixture<ComplOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
