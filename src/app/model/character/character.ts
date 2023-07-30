export class CharacterInformation {
    constructor(
        public id: string,
        public name: string,
        public status: string,
        public species: string,
        public image: string,
        public type: string,
        public gender: string,
        public origin: { name: string },
        public location: { name: string },
        public episode: string[]
    ) { }
}