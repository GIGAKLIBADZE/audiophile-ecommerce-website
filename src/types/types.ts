export type TDevices = {
    mobile: string;
    tablet: string;
    desktop: string
}

export interface IImages {
    images: TDevices
}

export interface ICategoryImages {
    categoryImage: TDevices
}

export type IGalleryItem = {
    first: TDevices;
    second: TDevices;
    third: TDevices;
}

export type IIncludeItem = {
    quantity: number;
    item: string;
}

export type IOtherItem = {
    slug: string;
    name: string;
    image: TDevices;
}

export interface IItem {
    id: number;
    slug: string;
    name: string;
    image: TDevices
    category: string;
    categoryImage: TDevices;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: IIncludeItem[];
    gallery: IGalleryItem;
    other: IOtherItem[];
}
