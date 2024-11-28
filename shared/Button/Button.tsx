import {
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useMemo } from 'react';

type ButtonVariants = 'small' | 'onlyIcon' | 'white';
type ButtonColorVariants = 'white';

type ButtonProps = {
	title?: string;
	variant?: ButtonVariants;
	colorVariant?: ButtonColorVariants;
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

const _getAdditionalStyles = (variant?: ButtonVariants, colorVariant?: ButtonColorVariants) => {
	const additionStyles: Record<string, any> = {
		container: [],
		text: [],
	};

	switch (variant) {
		case 'small': {
			additionStyles.container.push(styles.small);
			additionStyles.text.push(styles.smallText);
			break;
		}
		case 'onlyIcon': {
			additionStyles.container.push({
				padding: 8,
				borderRadius: 10,
			});
			break;
		}
	}

	if (colorVariant)
		switch (colorVariant) {
			case 'white': {
				additionStyles.container.push({ backgroundColor: Colors.white });
				additionStyles.text.push({ color: Colors.black });
				break;
			}
		}

	return additionStyles;
};

export const Button = ({ title, colorVariant, variant, ...props }: ButtonProps) => {
	const { color, animateOut, animateIn } = useAnimatedButton();

	const handlePressIn = (e: GestureResponderEvent) => {
		animateIn();
		props.onPressIn && props.onPressIn(e);
	};

	const handlePressOut = (e: GestureResponderEvent) => {
		animateOut();
		props.onPressOut && props.onPressOut(e);
	};

	const additionalStyles = useMemo(
		() => _getAdditionalStyles(variant, colorVariant),
		[variant, colorVariant],
	);

	return (
		<Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<Animated.View
				style={[styles.button, { backgroundColor: color }, additionalStyles.container, props.style]}
			>
				<Text style={[styles.text, additionalStyles.text]}>{title}</Text>
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
	small: {
		paddingHorizontal: 16,
		paddingVertical: 10,
		height: 38,
		borderRadius: Radius.r12,
	},
	smallText: {
		fontSize: Fonts.f14,
	},
});
