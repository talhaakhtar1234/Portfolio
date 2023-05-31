import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroSectionComponent } from './zero-section.component';

describe('ZeroSectionComponent', () => {
  let component: ZeroSectionComponent;
  let fixture: ComponentFixture<ZeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
