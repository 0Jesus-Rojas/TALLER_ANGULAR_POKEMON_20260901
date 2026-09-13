import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitleoComponent } from './litleo.component';

describe('LitleoComponent', () => {
  let component: LitleoComponent;
  let fixture: ComponentFixture<LitleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitleoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
