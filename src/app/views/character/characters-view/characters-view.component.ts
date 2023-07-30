import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterInformation } from 'src/app/model/character/character';
import { ItemAdditionalInformation, ItemFullInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.sass']
})
export class CharactersViewComponent implements OnInit{

  characterInformation: ItemFullInformation | undefined;
  id: Number | undefined;

  constructor(private service:RickAndMortyApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCharacterById(this.router.snapshot.params['id']).subscribe(character => { 
      this.parseInformation(character); 
    })
  }

  parseInformation(character: CharacterInformation): void {
    
    let episodes: string[] = character.episode.map(episodeUrl => {
      let parts = episodeUrl.split('/');
      let id = parts[parts.length - 1]
      return id
    })

    let episodeList: ItemAdditionalInformation = {type: "episode", items: episodes}; 
    this.characterInformation = {id: character.id, name: character.name, image: character.image, secondParam: character.status, thirdParam: character.species, optionalInfo: {origin: character.origin.name, location: character.location.name, gender: character.gender}, additionalItems: episodeList}  
  }
}
