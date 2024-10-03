import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartbildschirmComponent } from './startbildschirm.component';

describe('StartbildschirmComponent', () => {
  let component: StartbildschirmComponent;
  let fixture: ComponentFixture<StartbildschirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartbildschirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartbildschirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
