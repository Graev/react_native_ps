import { Animated } from 'react-native';

export const useAnimatedTextShow = ({
	from = -75,
	to = 0,
	duration = 1000,
	useNativeDriver = true,
} = {}) => {
	const opacity = new Animated.Value(0);
	const position = new Animated.Value(from);

	const animateIn = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: duration,
			useNativeDriver: useNativeDriver,
		}).start();
		Animated.timing(position, {
			toValue: to,
			duration: duration,
			useNativeDriver: useNativeDriver,
		}).start();
	};

	return {
		opacity,
		position,
		animateIn,
	};
};
