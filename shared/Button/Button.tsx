import {
	StyleSheet,
	Text,
	Pressable,
	PressableProps,
	Animated,
	GestureResponderEvent,
	ActivityIndicator,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

type ButtonLocalProps = PressableProps & {
	title: string;
	type?: 'primary' | 'secondary';
	isLoading?: boolean;
};

const useAnimateButton = (type: ButtonLocalProps['type']) => {
	if (type !== 'primary') return;

	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	const DURATION = 100;

	const fadeIn = () =>
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: DURATION,
			useNativeDriver: false,
		}).start();

	const fadeOut = () =>
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: DURATION,
			useNativeDriver: false,
		}).start();

	return { color, fadeIn, fadeOut };
};

export const Button = (props: ButtonLocalProps) => {
	const { type = 'primary', title, isLoading, ...rest } = props;

	const style = StyleSheet.compose(styles.common, styles.primary);

	// const combinedStyles = StyleSheet.compose(style, extStyle);

	const textStyle = type === 'secondary' ? styles.secondaryText : styles.text;

	const { color, fadeIn, fadeOut } = useAnimateButton(type) || {};

	const onPressIn = (e: GestureResponderEvent) => {
		fadeIn && fadeIn();
		props.onPressIn && props.onPressIn(e);
	};

	const onPressOut = (e: GestureResponderEvent) => {
		fadeOut && fadeOut();
		props.onPressOut && props.onPressOut(e);
	};

	return (
		<Pressable {...rest} onPressIn={onPressIn} onPressOut={onPressOut} disabled={isLoading}>
			<Animated.View
				style={[
					style,
					{
						backgroundColor: color,
					},
				]}
			>
				{!isLoading && <Text style={textStyle}>{title}</Text>}
				{isLoading && <ActivityIndicator size="small" color="white" />}
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	common: {
		alignItems: 'center',
	},

	primary: {
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		borderRadius: Radius.r10,
		paddingHorizontal: 24,
		paddingVertical: 12,
		height: 58,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
		fontFamily: Fonts.regular,
	},
	secondaryText: {
		color: Colors.link,
		fontSize: Fonts.f18,
	},
});
