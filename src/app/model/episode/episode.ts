export class EpisodeInformation {
    constructor(
        public id: string,
        public name: string,
        public air_date: string,
        public episode: string,
        public characters: string[]
    ) { }
}
