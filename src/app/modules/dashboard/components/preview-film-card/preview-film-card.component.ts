import { Component, Input, OnInit } from '@angular/core';
import { FilmPreview, noData } from '../../models/film.model';

@Component({
  selector: 'app-preview-film-card',
  templateUrl: './preview-film-card.component.html',
  styleUrls: ['./preview-film-card.component.scss']
})
export class PreviewFilmCardComponent {
  @Input()
  public film!: FilmPreview;
  private notFoundImagePath = '../../../../../assets/images/image_not_found.jpg'

  getImage(film: FilmPreview): string {
    return film.Poster !== noData ? film.Poster : this.notFoundImagePath;
  }
}
