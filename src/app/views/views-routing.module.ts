import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './character/characters-list/characters-list.component';
import { EpisodeListComponent } from './episodes/episode-list/episode-list.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { CharactersViewComponent } from './character/characters-view/characters-view.component';
import { EpisodeViewComponent } from './episodes/episode-view/episode-view.component';
import { LocationViewComponent } from './locations/location-view/location-view.component';

const routes: Routes = [
  {path: '', redirectTo:'character', pathMatch: 'full'},
  {path: 'character', component: CharactersListComponent},
  {path: 'character/:id', component: CharactersViewComponent},
  {path: 'episode', component: EpisodeListComponent},
  {path: 'episode/:id', component: EpisodeViewComponent},
  {path: 'location', component: LocationListComponent},
  {path: 'location/:id', component: LocationViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
