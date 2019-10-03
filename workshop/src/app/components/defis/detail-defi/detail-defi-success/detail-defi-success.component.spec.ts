import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDefiSuccessComponent } from './detail-defi-success.component';

describe('DetailDefiSuccessComponent', () => {
  let component: DetailDefiSuccessComponent;
  let fixture: ComponentFixture<DetailDefiSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDefiSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDefiSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
