import { Component, Input } from '@angular/core';
import { Film, noData } from '../../models/film.model';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {
  @Input()
  public film!: Film;
  public emptyFilmData = noData;
  public isReadMore = false;
  public currentPlotLimit: number | null = null;
  private readonly plotLimit = 200;

  ngOnInit() {
    this.isReadMore = this.isPlotLimitReached();
  }

  showText() {
    this.isReadMore = !this.isReadMore
    this.currentPlotLimit = this.isReadMore ? null : this.plotLimit;
  }

  showReadMoreBtn(): boolean {
    return this.film.Plot !== this.emptyFilmData && this.film.Plot.length > this.plotLimit;
  }

 private isPlotLimitReached(): boolean {
  console.log(this.film?.Plot)
  return this.film?.Plot.length >= this.plotLimit;
 }
}
