import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeInformation } from 'src/app/model/episode/episode';
import { ItemAdditionalInformation, ItemFullInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-episode-view',
  templateUrl: './episode-view.component.html',
  styleUrls: ['./episode-view.component.sass']
})
export class EpisodeViewComponent implements OnInit{

  episodeInformation: ItemFullInformation | undefined;
  id: Number | undefined;

  constructor(private service:RickAndMortyApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEpisodeById(this.router.snapshot.params['id']).subscribe(episode => { 
      this.parseInformation(episode); 
    })
  }

  parseInformation(episode: EpisodeInformation): void {
    let characters: string[] = episode.characters.map(characterUrl => {
      let parts = characterUrl.split('/');
      let id = parts[parts.length - 1]
      return id
    })

    let characterList: ItemAdditionalInformation = {type: "character", items: characters}; 
    this.episodeInformation = {id: episode.id, name: episode.name, image: "https://wallpapers.com/images/featured/rick-and-morty-8rc57d4ds44gqzau.jpg", secondParam: episode.episode, thirdParam: episode.air_date, optionalInfo: undefined, additionalItems: characterList}  
  }
}
