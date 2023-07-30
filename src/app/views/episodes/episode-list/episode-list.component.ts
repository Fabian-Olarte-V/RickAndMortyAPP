import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EpisodeInformation } from 'src/app/model/episode/episode';
import { ItemInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';
import { loadEpisodes } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectEpisodeList } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {

  episodes: ItemInformation[] | undefined;
  pageNumber: number = 1;
  maxPageNumber: number | undefined;

  constructor(private service: RickAndMortyApiService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pageNumber = 1;
    this.store.dispatch(loadEpisodes());

    this.store.select(selectEpisodeList).subscribe((episodes: EpisodeInformation[]) => {
      this.episodes = episodes.map((item: EpisodeInformation) => (
        {id: item.id, image: "assets/icons/icon_episode.png", name: item.name, secondaryInfo: item.episode}
      ))
    });
  }
}
