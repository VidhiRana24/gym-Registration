import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPackagesComponent } from './latest-packages.component';

describe('LatestPackagesComponent', () => {
  let component: LatestPackagesComponent;
  let fixture: ComponentFixture<LatestPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
