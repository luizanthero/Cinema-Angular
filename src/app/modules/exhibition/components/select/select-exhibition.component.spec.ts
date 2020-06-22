import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExhibitionComponent } from './select-exhibition.component';

describe('SelectExhibitionComponent', () => {
  let component: SelectExhibitionComponent;
  let fixture: ComponentFixture<SelectExhibitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectExhibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
