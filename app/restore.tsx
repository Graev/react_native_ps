import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Restore() {
	return (
		<View>
			<Link href={'/'}>
				<Text>Вернуться на главную</Text>
			</Link>
		</View>
	);
}
