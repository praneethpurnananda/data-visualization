import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondchartComponent } from './secondchart.component';

describe('SecondchartComponent', () => {
  let component: SecondchartComponent;
  let fixture: ComponentFixture<SecondchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
