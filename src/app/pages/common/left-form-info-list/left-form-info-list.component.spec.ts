import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFormInfoListComponent } from './left-form-info-list.component';

describe('LeftFormInfoListComponent', () => {
  let component: LeftFormInfoListComponent;
  let fixture: ComponentFixture<LeftFormInfoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftFormInfoListComponent]
    });
    fixture = TestBed.createComponent(LeftFormInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
