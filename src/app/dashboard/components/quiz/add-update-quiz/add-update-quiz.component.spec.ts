import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateQuizComponent } from './add-update-quiz.component';

describe('AddUpdateQuizComponent', () => {
  let component: AddUpdateQuizComponent;
  let fixture: ComponentFixture<AddUpdateQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
