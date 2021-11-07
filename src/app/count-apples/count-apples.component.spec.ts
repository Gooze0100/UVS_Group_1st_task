import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountApplesComponent } from './count-apples.component';

describe('CountApplesComponent', () => {
  let component: CountApplesComponent;
  let fixture: ComponentFixture<CountApplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountApplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountApplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
