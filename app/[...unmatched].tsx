import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import { Link } from '../shared/Link/Link';

export default function UnmatchedCustom() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('../assets/images/404.png')}
				resizeMode="contain"
			/>
			<Text style={styles.text}>
				Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения
			</Text>
			<Link href={'/'}>На главный экран</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: Gaps.g50,
	},
	image: {
		width: '80%',
		maxWidth: 204,
		height: 282,
	},
	text: {
		fontFamily: Fonts.regular,
		color: Colors.white,
		fontSize: Fonts.f18,
		paddingHorizontal: 25,
		textAlign: 'center',
	},
});
