import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BeerQuery } from './../../Store/beer.query';
import { BeerService } from './../../Service/beer.service';
import { BeerState } from './../../Store/beer.store';
import { tap, switchMap, filter, map } from 'rxjs/operators';
import { Beer } from './../../Model/beer';

@Component({
  selector: 'app-all-beers-list',
  templateUrl: './all-beers-list.component.html',
  styleUrls: ['./all-beers-list.component.css']
})
export class AllBeersListComponent implements OnInit, OnDestroy {
  beerToBeUpdated: Beer;

  isUpdateActivated = false;

  listBeersSub: Subscription;

  deleteBeerSub: Subscription;

  updateBeerSub: Subscription;

  beerState: BeerState;

  beers$: Observable<Beer[]> = this.beerQuery.selectAll();

  currentPage : number = 1;

  hoverText : string = "";

  constructor(private beerService: BeerService, private beerQuery: BeerQuery) {
  }

  ngOnInit() {
    this.getBeersList();
  }

  getNextPageBeers(){
    this.currentPage += 1;

    this.getBeersList();
  }

  getBeersList(){
    this.listBeersSub = this.beerQuery.selectAreBeersLoaded$.pipe(
      // filter(areBeersLoaded => !areBeersLoaded),
      switchMap(() => {
        return this.beerService.getAllBeers(this.currentPage);
      })
      // switchMap(areBeersLoaded => {
      //   if (!areBeersLoaded) {
      //     return this.beerService.getAllBeers();
      //   }
      // })
    ).subscribe(result => {
    });
  }

  mouseHover(ingredients : any){
    this.hoverText = "ingredients : ";
    for (var key in ingredients) {
      this.hoverText += key + " ";
    }
    console.log(this.hoverText);
  }

  ngOnDestroy() {
    if (this.listBeersSub) {
      this.listBeersSub.unsubscribe();
    }

    if (this.deleteBeerSub) {
      this.deleteBeerSub.unsubscribe();
    }

    if (this.updateBeerSub) {
      this.updateBeerSub.unsubscribe();
    }
  }
}
