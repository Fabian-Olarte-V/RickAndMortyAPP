import { ActionReducerMap } from "@ngrx/store";
import { characterReducer, episodeReducer, locationReducer } from "./reducers/items.reducers";
import { CharacterState, EpisodeState, LocationState } from "./items.state";

export interface AppState{
    characters: CharacterState;
    episodes: EpisodeState;
    location: LocationState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    characters: characterReducer,
    episodes: episodeReducer,
    location: locationReducer
}