import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroDialogComponent } from './add-hero-dialog.component';

describe('AddHeroDialogComponent', () => {
  let component: AddHeroDialogComponent;
  let fixture: ComponentFixture<AddHeroDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHeroDialogComponent]
    });
    fixture = TestBed.createComponent(AddHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
