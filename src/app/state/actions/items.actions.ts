import { createAction, props } from "@ngrx/store";
import { EpisodeInformation } from "src/app/model/episode/episode";
import { CharacterInformation } from "src/app/model/character/character";
import { LocationInformation } from "src/app/model/location/location";


export const loadCharacters = createAction('[Character List] Load Characters')
export const loadedCharacters = createAction(
    '[Character List] Loaded Characters',
    props<{ characters: CharacterInformation[] }>()
)

export const loadEpisodes = createAction('[Episodes List] Load Episodes')
export const loadedEpisodes = createAction(
    '[Episodes List] Loaded Episodes',
    props<{ episodes: EpisodeInformation[] }>()
)

export const loadLocations = createAction('[Locations List] Load Locations')
export const loadedLocations = createAction(
    '[Locations List] Loaded Locations',
    props<{ locations: LocationInformation[] }>()
)