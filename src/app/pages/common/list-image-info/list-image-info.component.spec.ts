import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImageInfoComponent } from './list-image-info.component';

describe('ListImageInfoComponent', () => {
  let component: ListImageInfoComponent;
  let fixture: ComponentFixture<ListImageInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListImageInfoComponent]
    });
    fixture = TestBed.createComponent(ListImageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
