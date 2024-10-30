import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { IAuthResponse, ILoginRequest } from './auth.interfaces';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

const DEFAULT_STATE = {
	accessToken: null,
	isLoading: false,
	error: null,
};

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>('auth', DEFAULT_STATE, storage);

export const loginAtom = atom(
	(get) => get(authAtom),
	async (_get, set, { email, password }: ILoginRequest) => {
		const newState: AuthState = {
			isLoading: false,
			accessToken: null,
			error: null,
		};

		if (!email) {
			newState.error = 'Не введен email';
			return set(authAtom, newState);
		}
		if (!password) {
			newState.error = 'Не введен пароль';
			return set(authAtom, newState);
		}

		newState.isLoading = true;

		set(authAtom, newState);

		// vasia@pupkin.ru:12345678

		try {
			await new Promise((res) => setTimeout(res, 2000));

			const { data } = await axios.post<IAuthResponse>(API.login, {
				email,
				password,
			});

			set(authAtom, {
				isLoading: false,
				accessToken: data.accessToken,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError)
				set(authAtom, {
					isLoading: false,
					accessToken: null,
					error: error.response?.data.message,
				});
		}
	},
);

export const logoutAtom = atom(null, (_get, set) => set(authAtom, DEFAULT_STATE));

export interface AuthState {
	accessToken: string | null;
	isLoading: boolean;
	error: string | null;
}
