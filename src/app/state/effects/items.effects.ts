import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, mergeMap } from "rxjs";
import { RickAndMortyApiService } from "src/app/services/rick-and-morty-api.service";

@Injectable()
export class ItemsEffects {

    constructor(private service: RickAndMortyApiService, private actions$: Actions) { }

    loadCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Character List] Load Characters'),
            mergeMap(() => this.service.getCharacterList().pipe(
                map(characters => ({ type: '[Character List] Loaded Characters', characters: characters.results, aditionalInfo: characters.info})),
                catchError(() => EMPTY)
            )),
        ))


    loadEpisodes$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Episodes List] Load Episodes'),
            mergeMap(() => this.service.getEpisodeList().pipe(
                map(episodes => ({ type: '[Episodes List] Loaded Episodes', episodes: episodes.results, aditionalInfo: episodes.info})),
                catchError(() => EMPTY)
            )),
        ))

    loadLocations$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Locations List] Load Locations'),
            mergeMap(() => this.service.getLocationList().pipe(
                map(locations => ({ type: '[Locations List] Loaded Locations', locations: locations.results, aditionalInfo: locations.info})),
                catchError(() => EMPTY)
            )),
        ))
}