import { Component, OnInit } from '@angular/core';
import { ItemInformation } from 'src/app/model/interface/item-information';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass']
})
export class CharactersListComponent implements OnInit{

  characters: ItemInformation[] | undefined;
  pageNumber: number = 1;
  maxPageNumber: number | undefined;

  constructor(private service: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.pageNumber = 1;

    //Llamado al api para obtener todos los personajes
    this.service.getCharachterList(this.pageNumber).subscribe(characters => {
      this.maxPageNumber = characters.info.pages 
      this.characters = characters.results.map((item: { id: number, image:string, name: string, status: string }) => ({id: item.id, image: item.image, name: item.name, secundaryInfo: item.status}));
    })

    
    //Suscripcion a cambios de input del header para realizar busqueda por filtro
    //this.service.dataSearch$.subscribe(dataSearch => {
     // if(dataSearch){
     //   this.service.getCharachtersByName(dataSearch).subscribe(characters => {
     //     this.characters = characters.results;
    ///    })
    //  }
    //});
  }

  
  nextPage(): void {
    this.pageNumber++;

    if(this.pageNumber > this.maxPageNumber!) this.pageNumber = this.maxPageNumber!;
    
    this.service.getCharachterList(this.pageNumber).subscribe(characters => {
      this.characters = characters.results;
    })
  }


  lastPage(): void {
    this.pageNumber--;

    if(this.pageNumber < 1) this.pageNumber = 1;
    
    this.service.getCharachterList(this.pageNumber).subscribe(characters => {
      this.characters = characters.results;
    })
  }
}

