import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerExpertiseComponent } from './banner-expertise.component';

describe('BannerExpertiseComponent', () => {
  let component: BannerExpertiseComponent;
  let fixture: ComponentFixture<BannerExpertiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerExpertiseComponent]
    });
    fixture = TestBed.createComponent(BannerExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
