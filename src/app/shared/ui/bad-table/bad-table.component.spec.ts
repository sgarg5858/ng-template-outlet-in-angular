import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadTableComponent } from './bad-table.component';

describe('BadTableComponent', () => {
  let component: BadTableComponent;
  let fixture: ComponentFixture<BadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
