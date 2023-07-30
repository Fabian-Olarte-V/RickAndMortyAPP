import { Component, OnInit } from '@angular/core';
import { ItemInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit{

  episodes: ItemInformation[] | undefined;
  pageNumber: number = 1;
  maxPageNumber: number | undefined;

  constructor(private service: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.pageNumber = 1;

    //Llamado al api para obtener todos los personajes
    this.service.getEpisodeList(this.pageNumber).subscribe(episodes => {
      this.maxPageNumber = episodes.info.pages 
      this.episodes = episodes.results.map((item: { id:number, image:string, name: string, episode: string }) => ({id: item.id, image: "assets/icons/icon_episode.png", name: item.name, secundaryInfo: item.episode}));
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
