import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaFrameComponent } from './caja-frame.component';

describe('CajaFrameComponent', () => {
  let component: CajaFrameComponent;
  let fixture: ComponentFixture<CajaFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
