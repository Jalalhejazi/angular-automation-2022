import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeknologiComponent } from './teknologi.component';

describe('TeknologiComponent', () => {
  let component: TeknologiComponent;
  let fixture: ComponentFixture<TeknologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeknologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeknologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
