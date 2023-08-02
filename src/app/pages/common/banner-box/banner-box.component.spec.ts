import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBoxComponent } from './banner-box.component';

describe('BannerBoxComponent', () => {
  let component: BannerBoxComponent;
  let fixture: ComponentFixture<BannerBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerBoxComponent]
    });
    fixture = TestBed.createComponent(BannerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
