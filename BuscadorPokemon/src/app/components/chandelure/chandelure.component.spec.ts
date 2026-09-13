import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandelureComponent } from './chandelure.component';

describe('ChandelureComponent', () => {
  let component: ChandelureComponent;
  let fixture: ComponentFixture<ChandelureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChandelureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChandelureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
