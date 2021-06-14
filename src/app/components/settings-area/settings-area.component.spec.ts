import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAreaComponent } from './settings-area.component';

describe('SettingsAreaComponent', () => {
  let component: SettingsAreaComponent;
  let fixture: ComponentFixture<SettingsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
