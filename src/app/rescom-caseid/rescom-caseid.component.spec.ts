import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescomCaseidComponent } from './rescom-caseid.component';

describe('RescomCaseidComponent', () => {
  let component: RescomCaseidComponent;
  let fixture: ComponentFixture<RescomCaseidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescomCaseidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescomCaseidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
