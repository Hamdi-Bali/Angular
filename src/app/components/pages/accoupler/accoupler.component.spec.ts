import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccouplerComponent } from './accoupler.component';

describe('AccouplerComponent', () => {
  let component: AccouplerComponent;
  let fixture: ComponentFixture<AccouplerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccouplerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccouplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
