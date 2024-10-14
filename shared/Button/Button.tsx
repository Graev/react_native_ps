import {
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

type ButtonProps = {
	title: string;
} & PressableProps;

const useAnimatedButton = () => {
	const animatedValue = new Animated.Value(0);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primary, Colors.primaryHover],
	});

	const DURATION = 200;
	const USE_NATIVE_DRIVER = true;

	const animateIn = () => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: DURATION,
			useNativeDriver: USE_NATIVE_DRIVER,
		}).start();
	};

	const animateOut = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: DURATION,
			useNativeDriver: USE_NATIVE_DRIVER,
		}).start();
	};

	return {
		color,
		animateIn,
		animateOut,
	};
};

export const Button = ({ title, ...props }: ButtonProps) => {
	const style = StyleSheet.compose(
		styles.button,
		typeof props.style !== 'function' ? props.style : {},
	);

	const { color, animateOut, animateIn } = useAnimatedButton();

	const handlePressIn = (e: GestureResponderEvent) => {
		animateIn();
		props.onPressIn && props.onPressIn(e);
	};

	const handlePressOut = (e: GestureResponderEvent) => {
		animateOut();
		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<Animated.View style={[style, { backgroundColor: color }]}>
				<Text style={styles.text}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 21,
		borderRadius: Radius.r16,
	},
	text: {
		color: Colors.white,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: Fonts.f16,
	},
});
