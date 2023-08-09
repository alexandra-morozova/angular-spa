import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpImdbService } from '../../services/http-imdb.service';
import { SearchResponce } from '../../models/search.model';
import { ActivatedRoute } from '@angular/router';
import { noData } from '../../models/film.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  public result$!: Observable<SearchResponce>;
  public emptyFilmData = noData;
  private searchTitle!: string;
  private routeSubscription!: Subscription;

  constructor(private httpImdb: HttpImdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.searchTitle = params['search']
      this.result$ = this.httpImdb.search(this.searchTitle);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
