import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCallToActionComponent } from './quick-call-to-action.component';

describe('QuickCallToActionComponent', () => {
  let component: QuickCallToActionComponent;
  let fixture: ComponentFixture<QuickCallToActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickCallToActionComponent]
    });
    fixture = TestBed.createComponent(QuickCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
