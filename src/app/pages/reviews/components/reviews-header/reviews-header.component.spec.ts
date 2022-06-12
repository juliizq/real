import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsHeaderComponent } from './reviews-header.component';

describe('ReviewsHeaderComponent', () => {
  let component: ReviewsHeaderComponent;
  let fixture: ComponentFixture<ReviewsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
