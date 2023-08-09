import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Film } from '../models/film.model';
import { Observable, forkJoin, of, switchMap } from 'rxjs';
import { SearchResponce } from '../models/search.model';

@Injectable()
export class HttpImdbService {
  constructor(private http: HttpClient) { }

  private readonly omdbApi = environment.api.omdbApi;
  private readonly apiKey = environment.accessTokens.omdApi;

  getFilmByTitle(title: string, isFullPlot?: boolean): Observable<Film> {
    let params = isFullPlot ? new HttpParams().set('t', title).set('apiKey', this.apiKey).set('plot', 'full') : 
      new HttpParams().set('t', title).set('apiKey', this.apiKey);

    return this.http.get<Film>(this.omdbApi, {params});
  }

// Lets imagine that we have api that returns an array 
  getTop(): Observable<Film[]>{
    return forkJoin([
        this.getFilmByTitle('Fleabag', true),
        this.getFilmByTitle('True Detective'),
        this.getFilmByTitle('The Great Beauty'),
        this.getFilmByTitle('Peaceful Warrior', true),
    ]);
  }

  search(title: string): Observable<SearchResponce> {
    return this.http.get<SearchResponce>(this.omdbApi, {params: new HttpParams().set('s', title).set('apiKey', this.apiKey)});
  }
}