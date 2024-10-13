import { SplashScreen, Stack } from 'expo-router';
// import {} from 'expo-fonts';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const insets = useSafeAreaInsets();

	const [loaded, error] = useFonts({
		FiraSansRegular: require('../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync();
	}, [loaded]);

	if (!loaded || error) return null;

	return (
		<SafeAreaProvider>
			<StatusBar style={'light'} />
			<Stack
				screenOptions={{
					headerShown: false,
					statusBarColor: Colors.black,
					contentStyle: {
						backgroundColor: Colors.black,
						paddingTop: insets.top,
					},
				}}
			>
				<Stack.Screen name={'index'} />
				<Stack.Screen
					name={'restore'}
					options={{
						presentation: 'modal',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
