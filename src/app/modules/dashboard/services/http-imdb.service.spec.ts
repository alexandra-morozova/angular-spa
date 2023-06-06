import { TestBed } from '@angular/core/testing';

import { HttpImdbService } from './http-imdb.service';

describe('HttpImdbService', () => {
  let service: HttpImdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpImdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
