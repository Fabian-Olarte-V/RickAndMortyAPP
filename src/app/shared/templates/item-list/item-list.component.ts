import { Component, Input } from '@angular/core';
import { ItemAditionalInformation, ItemInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent {

  itemList: ItemInformation[] | undefined;
  private _items: ItemAditionalInformation  | undefined;
  
  constructor(private service: RickAndMortyApiService) { }

  @Input()
  set items(value: ItemAditionalInformation | undefined) {
    this._items = value;
    if (value !== undefined) {
      this.populateListItems(); 
    }
  }

  get items(): ItemAditionalInformation | undefined {
    return this._items;
  }

  populateListItems(): void {
    const ids: string = this._items!.items!.join(',');
    console.log(this.items?.items)

    if(this.items?.type == "character"){
      this.getCharacters(ids);
    }

    else if(this.items?.type == "episode"){
      this.getEpisodies(ids);
    }
  }

  getCharacters(ids: string): void {
    this.service.getCharachterById(ids).subscribe(characters => {
      if(!Array.isArray(characters)){
        characters = [characters]
      }
      this.itemList = characters.map((item: { id: number, image:string, name: string, status: string }) => ({id: item.id, image: item.image, name: item.name, secundaryInfo: item.status}));
    })
  }

  getEpisodies(ids: string): void {
    this.service.getEpisodeById(ids).subscribe(episodes => {
      if(!Array.isArray(episodes)){
        episodes = [episodes]
      }
      this.itemList = episodes.map((item: { id:number, image:string, name: string, episode: string }) => ({id: item.id, image: "assets/icons/icon_episode.png", name: item.name, secundaryInfo: item.episode}));
    })
  }
}
