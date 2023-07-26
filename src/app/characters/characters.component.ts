import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../services/rick-and-morty-api.service';
import { Character } from '../model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit{

  characters: Character[] | undefined;
  pageNumber: number = 1;
  maxPageNumber: number | undefined;

  constructor(private service:RickAndMortyApiService) {}

  ngOnInit(): void {
    this.pageNumber = 1;

    //Llamado al api para obtener todos los personajes
    this.service.getCharachterList(this.pageNumber).subscribe(characters => {
      this.maxPageNumber = characters.info.pages 
      this.characters = characters.results;
    })

    //Suscripcion a cambios de input del header para realizar busqueda por filtro
    this.service.dataSearch$.subscribe(dataSearch => {
      if(dataSearch){
        this.service.getCharachtersByName(dataSearch).subscribe(characters => {
          this.characters = characters.results;
        })
      }
    });
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
