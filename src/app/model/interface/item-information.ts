export interface ItemInformation {
    id: string;
    image: string;
    name: string;
    secondaryInfo: string;
}

export interface ItemFullInformation {
    id: string;
    image: string;
    name: string;
    secondParam: string;
    thirdParam: string;
    optionalInfo: {
        origin: string;
        location: string;
        gender: string;
    } | undefined;
    additionalItems: ItemAdditionalInformation;
}

export interface ItemAdditionalInformation {
    type: string;
    items: string[] | undefined;
}