import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerService } from './Service/beer.service';
import { AllBeersListComponent } from './Component/all-beers-list/all-beers-list.component';
import { MyBeersComponent } from './Component/my-beers/my-beers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MongoService } from './Service/mongo.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AllBeersListComponent,
    MyBeersComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    NgbAlertModule
  ],
  providers: [BeerService,MongoService]
})
export class BeerModule { }
