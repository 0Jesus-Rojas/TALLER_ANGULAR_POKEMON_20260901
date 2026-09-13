import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SylveonComponent } from './sylveon.component';

describe('SylveonComponent', () => {
  let component: SylveonComponent;
  let fixture: ComponentFixture<SylveonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SylveonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SylveonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
