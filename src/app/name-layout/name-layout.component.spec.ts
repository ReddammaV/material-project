import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameLayoutComponent } from './name-layout.component';

describe('NameLayoutComponent', () => {
  let component: NameLayoutComponent;
  let fixture: ComponentFixture<NameLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
