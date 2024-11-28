import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

export default function MainLayout() {
	const [loadedFont, error] = useFonts({
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		Sora: require('@assets/fonts/Sora-Regular.ttf'),
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		SoraSemiBold: require('@assets/fonts/Sora-SemiBold.ttf'),
	});

	if (!loadedFont) {
		return null;
	}

	if (error) {
		return null;
	}

	const style = {
		flex: 1,
	};

	return (
		<SafeAreaView style={style}>
			<Slot />
		</SafeAreaView>
	);
}
