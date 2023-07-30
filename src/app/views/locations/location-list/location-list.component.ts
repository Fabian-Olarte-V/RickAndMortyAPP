import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemInformation } from 'src/app/model/interface/item-information';
import { LocationInformation } from 'src/app/model/location/location';
import { RickAndMortyApiService } from 'src/app/services/rick-and-morty-api.service';
import { loadLocations } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLocationList } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.sass']
})
export class LocationListComponent implements OnInit{

  locations: ItemInformation[] | undefined;
  pageNumber: number = 1;
  maxPageNumber: number | undefined;

  constructor(private service: RickAndMortyApiService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadLocations());
    this.store.select(selectLocationList).subscribe((locations: LocationInformation[]) => {
      this.locations = locations.map((item: LocationInformation) => ({id: item.id,image: "assets/icons/icon_location.png",name: item.name, secondaryInfo: item.type}));
    });
  }
}

