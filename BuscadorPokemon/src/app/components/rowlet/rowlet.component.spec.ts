import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowletComponent } from './rowlet.component';

describe('RowletComponent', () => {
  let component: RowletComponent;
  let fixture: ComponentFixture<RowletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
