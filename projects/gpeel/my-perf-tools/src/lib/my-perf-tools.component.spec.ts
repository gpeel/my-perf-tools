import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPerfToolsComponent } from './my-perf-tools.component';

describe('MyPerfToolsComponent', () => {
  let component: MyPerfToolsComponent;
  let fixture: ComponentFixture<MyPerfToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPerfToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPerfToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
