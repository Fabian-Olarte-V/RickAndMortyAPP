import { createReducer, on } from "@ngrx/store";
import { loadCharacters, loadEpisodes, loadLocations, loadedCharacters, loadedEpisodes, loadedLocations } from "../actions/items.actions";
import { CharacterState, EpisodeState, LocationState } from "../items.state";

export const initialCharacterState: CharacterState = { loading: false, characters: []};
export const initialLocationState: LocationState = { loading: false, locations: []};
export const initialEpisodeState: EpisodeState = { loading: false, episodes: []};

export const characterReducer = createReducer(
    initialCharacterState,
    on(loadCharacters, (state) => {
        return {...state, loading: true}
    }),
    on(loadedCharacters, (state, {characters}) => {
        return {...state, loading: false, characters: characters}
    })
)

export const locationReducer = createReducer(
    initialLocationState,
    on(loadLocations, (state) => {
        return {...state, loading: true}
    }),
    on(loadedLocations, (state, {locations}) => {
        return {...state, loading: true, locations: locations}
    }),
)

export const episodeReducer = createReducer(
    initialEpisodeState,
    on(loadEpisodes, (state) => {
        return {...state, loading: true}
    }),
    on(loadedEpisodes, (state, {episodes}) => {
        return {...state, loading: true, episodes: episodes}
    })
)

