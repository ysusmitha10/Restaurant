import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceltableComponent } from './canceltable.component';

describe('CanceltableComponent', () => {
  let component: CanceltableComponent;
  let fixture: ComponentFixture<CanceltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceltableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanceltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
