import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFilmCardComponent } from './preview-film-card.component';

describe('PreviewFilmCardComponent', () => {
  let component: PreviewFilmCardComponent;
  let fixture: ComponentFixture<PreviewFilmCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewFilmCardComponent]
    });
    fixture = TestBed.createComponent(PreviewFilmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
