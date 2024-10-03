import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaComponent } from './colombia.component';

describe('ColombiaComponent', () => {
  let component: ColombiaComponent;
  let fixture: ComponentFixture<ColombiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColombiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
