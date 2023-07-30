export interface ItemInformation {
    id: string,
    image: string;
    name: string;
    secundaryInfo: string;
    type: string;
}

export interface ItemFullInformation {
    id: number;
    image: string;
    name: string;
    secondParam: string;
    thirdParam: string;
    optionalInfo: {origin: string, location: string, gender: string} | undefined;
    adicionalItems: ItemAditionalInformation;
}

export interface ItemAditionalInformation{
    type: string;
    items: string[] | undefined;
}