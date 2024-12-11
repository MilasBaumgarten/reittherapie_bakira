import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReittherapieComponent } from './reittherapie.component';

describe('ReittherapieComponent', () => {
  let component: ReittherapieComponent;
  let fixture: ComponentFixture<ReittherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReittherapieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReittherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
