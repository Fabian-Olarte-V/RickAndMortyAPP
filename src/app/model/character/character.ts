export class characterInformation {
    constructor(public id: number, public name: string, public status: string, public species: string, public image: string,
        public type: string, public gender: string, public origin: { name: string }, public location: { name: string }, public episode: string[]) { }
}
