import { Component, OnInit } from '@angular/core';
import { characterFullInfo } from '../model/character';
import { RickAndMortyApiService } from '../services/rick-and-morty-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.sass']
})

export class CharacterViewComponent implements OnInit{

  character: characterFullInfo | undefined;
  id: Number | undefined;

  constructor(private service:RickAndMortyApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCharachterById(this.router.snapshot.params['id']).subscribe(character => { 
      this.character = character;
    })
  }
}
