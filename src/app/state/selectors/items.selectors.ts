import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CharacterState, EpisodeState, LocationState } from "../items.state";

export const selectCharacters = (state: AppState) => state.characters;
export const selectEpisodes = (state: AppState) => state.episodes;
export const selectLocations= (state: AppState) => state.location;

export const selectCharacterList = createSelector(
    selectCharacters,
    (state: CharacterState) => state.characters
)

export const selectEpisodeList = createSelector(
    selectEpisodes,
    (state: EpisodeState) => state.episodes
)

export const selectLocationList = createSelector(
    selectLocations,
    (state: LocationState) => state.locations
)