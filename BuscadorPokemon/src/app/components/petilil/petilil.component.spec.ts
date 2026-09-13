import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetililComponent } from './petilil.component';

describe('PetililComponent', () => {
  let component: PetililComponent;
  let fixture: ComponentFixture<PetililComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetililComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetililComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
