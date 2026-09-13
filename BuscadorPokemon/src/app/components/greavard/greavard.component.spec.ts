import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreavardComponent } from './greavard.component';

describe('GreavardComponent', () => {
  let component: GreavardComponent;
  let fixture: ComponentFixture<GreavardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreavardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreavardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
