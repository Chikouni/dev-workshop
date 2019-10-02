import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDefiComponent } from './detail-defi.component';

describe('DetailDefiComponent', () => {
  let component: DetailDefiComponent;
  let fixture: ComponentFixture<DetailDefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
