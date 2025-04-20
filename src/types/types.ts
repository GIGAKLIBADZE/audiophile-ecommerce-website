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

export type TGalleryItem = {
    first: TDevices;
    second: TDevices;
    third: TDevices;
}

export type TIncludeItem = {
    quantity: number;
    item: string;
}

export type TOtherItem = {
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
    includes: TIncludeItem[];
    gallery: TGalleryItem;
    other: TOtherItem[];
}

export interface IForm {
    name: string;
    email: string;
    phone: number;
    address: string;
    zipCode: number;
    city: string;
    country: string;
    eMoneyNum?: number;
    eMoneyPin?: number;
    paymentMethod: "e-money" | "Cash on Delivery"
}