import { User } from './user.model';
import { atom } from 'jotai';

export const profileAtom = atom<UserState>({
	profile: null,
	isLoading: false,
	error: null,
});

export interface UserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}
