import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from './shared/Button/Button';
import { Colors, Fonts } from './shared/tokens';

const useAnimatedTextShow = () => {
	const opacity = new Animated.Value(0);
	const position = new Animated.Value(-75);

	const DURATION = 1000;
	const USE_NATIVE_DRIVER = true;

	const animateIn = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: DURATION,
			useNativeDriver: USE_NATIVE_DRIVER,
		}).start();
		Animated.timing(position, {
			toValue: 0,
			duration: DURATION,
			useNativeDriver: USE_NATIVE_DRIVER,
		}).start();
	};

	return {
		opacity,
		position,
		animateIn,
	};
};

export default function App() {
	const { position, opacity, animateIn } = useAnimatedTextShow();

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				//eslint-disable-next-line @typescript-eslint/no-require-imports
				source={require('./assets/welcome-background.png')}
				imageStyle={styles.image}
			>
				<Animated.View
					style={{
						transform: [{ translateY: position }],
						opacity,
					}}
					onLayout={animateIn}
				>
					<Text style={styles.header}>Одно из самых вкусных кофе в городе!</Text>
				</Animated.View>
				<View style={styles.gap}>
					<Text style={styles.description}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>

					<Button title={'Начать'} onPress={() => {}} />
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
		paddingBottom: 43,
	},
	background: {
		flex: 1,
		gap: 8,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
	},
	header: {
		fontSize: Fonts.f34,
		color: Colors.white,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 8,
	},
	description: {
		fontSize: Fonts.f14,
		color: Colors.gray,
		textAlign: 'center',
	},
	image: {
		resizeMode: 'contain',
		top: -166,
	},
	gap: {
		gap: 24,
	},
});
