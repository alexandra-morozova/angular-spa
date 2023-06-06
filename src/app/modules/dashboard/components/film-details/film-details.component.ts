import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpImdbService } from '../../services/http-imdb.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Film, noData } from '../../models/film.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit, OnDestroy {
  public film$!: Observable<Film>;
  private searchTitle!: string;
  private routeSubscription!: Subscription;
  private notFoundImagePath = '../../../../../assets/images/image_not_found.jpg'

  constructor(private httpImdb: HttpImdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.searchTitle = params['title']
      this.film$ = this.httpImdb.getFilmByTitle(this.searchTitle, true);
    });
  }

  
  getImage(film: Film): string {
    return film.Poster !== noData ? film.Poster : this.notFoundImagePath;
  }
  
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
