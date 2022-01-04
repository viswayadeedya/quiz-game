import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaberboardComponent } from './leaberboard.component';

describe('LeaberboardComponent', () => {
  let component: LeaberboardComponent;
  let fixture: ComponentFixture<LeaberboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaberboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaberboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
