import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { LocationViewComponent } from './locations/location-view/location-view.component';
import { CharactersViewComponent } from './character/characters-view/characters-view.component';
import { CharactersListComponent } from './character/characters-list/characters-list.component';
import { EpisodeViewComponent } from './episodes/episode-view/episode-view.component';
import { EpisodeListComponent } from './episodes/episode-list/episode-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LocationListComponent,
    LocationViewComponent,
    CharactersViewComponent,
    CharactersListComponent,
    EpisodeViewComponent,
    EpisodeListComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
