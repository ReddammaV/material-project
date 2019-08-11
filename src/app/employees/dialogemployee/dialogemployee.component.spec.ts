import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogemployeeComponent } from './dialogemployee.component';

describe('DialogemployeeComponent', () => {
  let component: DialogemployeeComponent;
  let fixture: ComponentFixture<DialogemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
