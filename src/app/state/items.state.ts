import { CharacterInformation } from "../model/character/character";
import { EpisodeInformation } from "../model/episode/episode";
import { LocationInformation } from "../model/location/location";

export interface CharacterState{
    loading: boolean,
    characters: CharacterInformation[]
}

export interface EpisodeState{
    loading: boolean,
    episodes: EpisodeInformation[]
}

export interface LocationState{
    loading: boolean,
    locations: LocationInformation[]
}