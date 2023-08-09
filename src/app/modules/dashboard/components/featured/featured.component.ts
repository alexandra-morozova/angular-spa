import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import { HttpImdbService } from '../../services/http-imdb.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  public topFilms$!: Observable<Film[]>;

  constructor(private httpImdb: HttpImdbService) {}

  ngOnInit() {
    this.topFilms$ = this.httpImdb.getTop();
  }
}
