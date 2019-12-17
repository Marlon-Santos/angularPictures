import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePhotosBtnComponent } from './more-photos-btn.component';

describe('MorePhotosBtnComponent', () => {
  let component: MorePhotosBtnComponent;
  let fixture: ComponentFixture<MorePhotosBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePhotosBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePhotosBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
