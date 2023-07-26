export class Character {
    constructor(public id: number, public name: string, public status: string, public species: string, public image: string) { }
}

export class characterFullInfo{
    constructor(public id: number, public name: string, public status: string, public species: string, public image: string,
        public type: string, public gender: string, public origin: {name: string}, public location: {name: string}) { }
}
