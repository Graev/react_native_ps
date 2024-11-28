export enum CoffeeTypeEnum {
	Cappuccino = 'cappuccino',
	Macchiato = 'macchiato',
	Latte = 'latte',
	Espresso = 'espresso',
}

export interface ProductModel {
	id: number;
	name: string;
	subTitle: string;
	type: CoffeeTypeEnum;
	price: number;
	image: string;
	description: string;
	rating: number;
}
