import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from '@shared/Button/Button';
import { Colors, Fonts } from '@shared/tokens';
import { useAnimatedTextShow } from '../hook/useAnimatedTextShow';
import { router } from 'expo-router';

export default function App() {
	const { position, opacity, animateIn } = useAnimatedTextShow();

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				//eslint-disable-next-line @typescript-eslint/no-require-imports
				source={require('@assets/welcome-background.png')}
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

					<Button
						title={'Начать'}
						onPress={() => {
							router.navigate('/catalog');
						}}
					/>
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
