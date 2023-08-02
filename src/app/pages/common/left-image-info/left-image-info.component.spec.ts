import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageInfoComponent } from './left-image-info.component';

describe('LeftImageInfoComponent', () => {
  let component: LeftImageInfoComponent;
  let fixture: ComponentFixture<LeftImageInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftImageInfoComponent]
    });
    fixture = TestBed.createComponent(LeftImageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
