import { Injectable } from '@angular/core';
import { Beer } from "../Model/beer";
import { ID, EntityStore, StoreConfig, EntityState } from '@datorama/akita';

export interface BeerState extends EntityState<Beer, string> {
  //bool to check if the beers are already loaded in state.
  areBeersLoaded: boolean;
}

export function createInitialState(): BeerState {
  return {
    areBeersLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'beers' })

export class BeerStore extends EntityStore<BeerState> {

    constructor() {
        super(createInitialState());
    }

    loadBeers(beers: Beer[], areBeersLoaded: boolean) {
      this.set(beers);
      this.update(state => ({
        ...state,
        areBeersLoaded
      }));
    }
}