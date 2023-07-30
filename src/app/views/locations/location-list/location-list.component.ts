import { Component, OnInit } from '@angular/core';
import { ItemInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.sass']
})
export class LocationListComponent implements OnInit{

  episodes: ItemInformation[] | undefined;
  pageNumber: number = 1;
  maxPageNumber: number | undefined;

  constructor(private service: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.pageNumber = 1;

    //Llamado al api para obtener todos los personajes
    this.service.getLocationList(this.pageNumber).subscribe(episodes => {
      this.maxPageNumber = episodes.info.pages 
      this.episodes = episodes.results.map((item: { id:number, image:string, name: string, type: string }) => ({id:item.id, image: "assets/icons/icon_location.png", name: item.name, secundaryInfo: item.type}));
    })
  }

  nextPage(): void {
    this.pageNumber++;

    if(this.pageNumber > this.maxPageNumber!) this.pageNumber = this.maxPageNumber!;
    
    this.service.getCharachterList(this.pageNumber).subscribe(episodes => {
      this.episodes = episodes.results;
    })
  }

  lastPage(): void {
    this.pageNumber--;

    if(this.pageNumber < 1) this.pageNumber = 1;
    
    this.service.getCharachterList(this.pageNumber).subscribe(episodes => {
      this.episodes = episodes.results;
    })
  }
}

