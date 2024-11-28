import { CoffeeTypeEnum, ProductModel } from '@entities/product';

export enum CoffeeTypeFilterAdditionEnum {
	All = 'all',
}

interface FilterModel {
	type?: CoffeeTypeEnum & CoffeeTypeFilterAdditionEnum;
	text?: string;
}

export interface CatalogModel {
	products: ProductModel[];
	filter: FilterModel;
	isLoading: boolean;
}
