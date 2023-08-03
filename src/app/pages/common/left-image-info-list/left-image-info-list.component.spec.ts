import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageInfoListComponent } from './left-image-info-list.component';

describe('LeftImageInfoListComponent', () => {
  let component: LeftImageInfoListComponent;
  let fixture: ComponentFixture<LeftImageInfoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftImageInfoListComponent]
    });
    fixture = TestBed.createComponent(LeftImageInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
