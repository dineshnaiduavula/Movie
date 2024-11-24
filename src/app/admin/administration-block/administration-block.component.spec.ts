import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationBlockComponent } from './administration-block.component';

describe('AdministrationBlockComponent', () => {
  let component: AdministrationBlockComponent;
  let fixture: ComponentFixture<AdministrationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
