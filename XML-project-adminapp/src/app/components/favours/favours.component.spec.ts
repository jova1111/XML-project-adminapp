import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoursComponent } from './favours.component';

describe('FavoursComponent', () => {
  let component: FavoursComponent;
  let fixture: ComponentFixture<FavoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
