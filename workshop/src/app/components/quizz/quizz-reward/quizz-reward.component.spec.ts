import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzRewardComponent } from './quizz-reward.component';

describe('QuizzRewardComponent', () => {
  let component: QuizzRewardComponent;
  let fixture: ComponentFixture<QuizzRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
