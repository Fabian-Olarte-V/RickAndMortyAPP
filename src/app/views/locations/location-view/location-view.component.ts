import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemAditionalInformation, ItemFullInformation } from 'src/app/model/interface/item-information';
import { LocationInformation } from 'src/app/model/location/location';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.sass']
})
export class LocationViewComponent implements OnInit{

  locationInformation: ItemFullInformation | undefined;
  id: Number | undefined;

  constructor(private service:RickAndMortyApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getLocationById(this.router.snapshot.params['id']).subscribe(location => { 
      this.parseInformation(location); 
    })
  }

  parseInformation(location: LocationInformation): void {
    let characters: string[] = location.residents.map(characterUrl => {
      let parts = characterUrl.split('/');
      let id = parts[parts.length - 1]
      return id
    })

    let characterList: ItemAditionalInformation = {type: "character", items: characters}; 
    this.locationInformation = {id: location.id, name: location.name, image: "https://doitbeforeme.com/wp-content/uploads/2023/01/lockscreen-rick-and-morty-wallpaper.webp", secondParam: location.type , thirdParam: location.dimension, optionalInfo: undefined, adicionalItems: characterList}  
  }
}