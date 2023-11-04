import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosViewComponent } from './avisos-view.component';

describe('AvisosViewComponent', () => {
  let component: AvisosViewComponent;
  let fixture: ComponentFixture<AvisosViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisosViewComponent]
    });
    fixture = TestBed.createComponent(AvisosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
