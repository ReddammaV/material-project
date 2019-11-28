import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytabComponent } from './mytab.component';

describe('MytabComponent', () => {
  let component: MytabComponent;
  let fixture: ComponentFixture<MytabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
