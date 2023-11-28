import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosPreviewComponent } from './fotos-preview.component';

describe('FotosPreviewComponent', () => {
  let component: FotosPreviewComponent;
  let fixture: ComponentFixture<FotosPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosPreviewComponent]
    });
    fixture = TestBed.createComponent(FotosPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
