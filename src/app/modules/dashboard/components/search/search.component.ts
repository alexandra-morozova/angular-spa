import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmitEvent, Events } from '../../services/event-bus.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private router: Router) {}
  
  public searchValue: string | undefined;

  public onSearch() {
    if (!this.searchValue) {
      return;
    }
    this.setSearchQueryParams(this.searchValue);
  }
  
  setSearchQueryParams(value: string) {
    this.router.navigate(['results'], { queryParams: {search: value} });
  }
}
