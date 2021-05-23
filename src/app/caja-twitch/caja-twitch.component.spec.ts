import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaTwitchComponent } from './caja-twitch.component';

describe('CajaTwitchComponent', () => {
  let component: CajaTwitchComponent;
  let fixture: ComponentFixture<CajaTwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaTwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
