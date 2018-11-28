import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieImageComponent } from './add-movie-image.component';

describe('AddMovieImageComponent', () => {
  let component: AddMovieImageComponent;
  let fixture: ComponentFixture<AddMovieImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
