import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescomCdaxInformationComponent } from './rescom-cdax-information.component';

describe('RescomCdaxInformationComponent', () => {
  let component: RescomCdaxInformationComponent;
  let fixture: ComponentFixture<RescomCdaxInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescomCdaxInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescomCdaxInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
