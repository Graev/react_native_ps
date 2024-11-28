import { CoffeeTypeEnum } from '../model/product.model';
import { CoffeeTypeFilterAdditionEnum } from '@entities/catalog';

export const CoffeeTypeToLabel: Record<CoffeeTypeEnum | CoffeeTypeFilterAdditionEnum, string> = {
	[CoffeeTypeFilterAdditionEnum.All]: 'Все',
	[CoffeeTypeEnum.Cappuccino]: 'Капучино',
	[CoffeeTypeEnum.Espresso]: 'Эспрессо',
	[CoffeeTypeEnum.Latte]: 'Латте',
	[CoffeeTypeEnum.Macchiato]: 'Макиато',
};
