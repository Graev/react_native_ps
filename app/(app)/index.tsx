import { Text, View } from 'react-native';
import { useSetAtom } from 'jotai';
import { Button } from '../../shared/Button/Button';
import { logoutAtom } from '../../entities/auth/model/auth.state';

export default function MyCourses() {
	const logout = useSetAtom(logoutAtom);

	return (
		<View>
			<Text style={{ color: 'white' }}>index</Text>
			<Button title={'Logout'} onPress={logout} />
		</View>
	);
}
