import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBeersListComponent } from './beer/Component/all-beers-list/all-beers-list.component';
import { MyBeersComponent } from './beer/Component/my-beers/my-beers.component';

const routes: Routes = [{
  path: 'all-beers',
  component: AllBeersListComponent
},
{path: 'my-beers', component: MyBeersComponent},
{path: '**', redirectTo: 'all-beers'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
