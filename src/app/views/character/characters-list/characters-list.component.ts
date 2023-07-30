import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterInformation } from 'src/app/model/character/character';
import { ItemInformation } from 'src/app/model/interface/item-information';
import { loadCharacters } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectCharacterList } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass']
})
export class CharactersListComponent implements OnInit {

  characters: ItemInformation[] | undefined;
  maxPageNumber: number | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
    this.store.select(selectCharacterList).subscribe((characters: CharacterInformation[]) => {
        this.characters = characters.map((item: { id: string, image: string, name: string, status: string }) =>
          ({ id: item.id, image: item.image, name: item.name, secondaryInfo: item.status }));
      });
  }
}

