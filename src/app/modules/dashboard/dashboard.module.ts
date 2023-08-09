import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { HttpImdbService } from './services/http-imdb.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FeaturedComponent } from './components/featured/featured.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PreviewFilmCardComponent } from './components/preview-film-card/preview-film-card.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        FilmCardComponent,
        SearchComponent,
        FeaturedComponent,
        SearchResultsComponent,
        PreviewFilmCardComponent,
        FilmDetailsComponent,
        ShortenPipe
    ],
    exports: [DashboardComponent],
    providers: [HttpImdbService]
})

export class DashboardModule { }
