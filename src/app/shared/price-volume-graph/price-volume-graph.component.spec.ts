import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceVolumeGraphComponent } from './price-volume-graph.component';

describe('PriceVolumeGraphComponent', () => {
  let component: PriceVolumeGraphComponent;
  let fixture: ComponentFixture<PriceVolumeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceVolumeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceVolumeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
