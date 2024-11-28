import { atom } from 'jotai';
import axios from 'axios';
import { CatalogModel } from '../model/catalog.model';
import { API } from '../api/api';

const INITIAL_STATE: CatalogModel = {
	products: [],
	filter: {},
	isLoading: false,
};

const requestCatalogProducts = async (filter: CatalogModel['filter']) => {
	const { data } = await axios.get(API.getCatalogProducts, { params: filter });

	return data;
};

export const catalogAtom = atom<CatalogModel>(INITIAL_STATE);

export const filterCatalogAtom = atom(
	null,
	async (_get, set, updateFilter: Partial<CatalogModel['filter']>) => {
		const { filter, isLoading } = _get(catalogAtom);
		if (isLoading) return;
		set(catalogAtom, (prev) => ({ ...prev, isLoading: true }));
		const newFilter = { ...filter, ...updateFilter };

		const products = await requestCatalogProducts(newFilter);

		set(catalogAtom, (prev) => ({ ...prev, filter: newFilter, products, isLoading: false }));
	},
);
