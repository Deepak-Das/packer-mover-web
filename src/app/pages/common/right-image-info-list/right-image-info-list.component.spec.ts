import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightImageInfoListComponent } from './right-image-info-list.component';

describe('RightImageInfoListComponent', () => {
  let component: RightImageInfoListComponent;
  let fixture: ComponentFixture<RightImageInfoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightImageInfoListComponent]
    });
    fixture = TestBed.createComponent(RightImageInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
