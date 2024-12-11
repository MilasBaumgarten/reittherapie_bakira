import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierischeTherapeutenComponent } from './tierische-therapeuten.component';

describe('TierischeTherapeutenComponent', () => {
  let component: TierischeTherapeutenComponent;
  let fixture: ComponentFixture<TierischeTherapeutenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierischeTherapeutenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierischeTherapeutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
