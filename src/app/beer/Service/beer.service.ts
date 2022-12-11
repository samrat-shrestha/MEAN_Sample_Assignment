import { BeerStore, BeerState } from './../Store/beer.store';
import { EntityStore, EntityState } from '@datorama/akita';
import { Beer } from './../Model/beer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class BeerService {

  http: HttpClient;

  beerStore: BeerStore;

  constructor(http: HttpClient, beerStore: BeerStore) {
    this.http = http;
    this.beerStore = beerStore;
  }

  getAllBeers(page:number): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers?page='+page+'&per_page=10').pipe(
      tap(Beers => {
        this.beerStore.loadBeers(Beers, true);
      })
    );
  }

  createBeersActive(areBeersLoaded: boolean = false) {
    this.beerStore.loadBeers([], areBeersLoaded);
  }
}