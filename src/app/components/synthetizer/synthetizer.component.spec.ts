import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthetizerComponent } from './synthetizer.component';

describe('SynthetizerComponent', () => {
  let component: SynthetizerComponent;
  let fixture: ComponentFixture<SynthetizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthetizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthetizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
