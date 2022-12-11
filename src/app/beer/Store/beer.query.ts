import { Injectable } from '@angular/core';
import { BeerStore, BeerState } from './beer.store';
import { QueryEntity } from '@datorama/akita';


@Injectable({
  providedIn: 'root'
})
export class BeerQuery extends QueryEntity<BeerState> {

  selectAreBeersLoaded$ = this.select(state => {
    return state.areBeersLoaded;
  });

  constructor(protected beer: BeerStore) {
    super(beer);
  }
}