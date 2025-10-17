export type Basket = {
    items: ShopItem[]
}

export type ShopItem = {
    id: number;
    price: number;
    name: string;
    description: string;
}