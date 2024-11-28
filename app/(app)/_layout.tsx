import React from 'react';
import { Redirect } from 'expo-router';
import { useAtomValue } from 'jotai';
import { authAtom } from '@entities/auth/model/auth.state';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors, Fonts } from '@shared/tokens';
import { MenuButton } from '../../feature/layout/ui/MenuButton/MenuButton';
import { CustomDrawer } from '@entities/layout/ui/Drawer/CustomDrawer';

export default function AppLayout() {
	const { accessToken } = useAtomValue(authAtom);

	if (!accessToken) {
		return <Redirect href={'/login'} />;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.blackLight,
						shadowColor: 'transparent',
					},
					headerTitleStyle: {
						color: Colors.white,
						fontFamily: Fonts.regular,
						fontSize: Fonts.f20,
					},
					headerLeft: () => {
						return <MenuButton navigation={navigation} />;
					},
					headerTitleAlign: 'center',
					sceneContainerStyle: {
						backgroundColor: Colors.black,
					},
				})}
				drawerContent={(props) => <CustomDrawer {...props} />}
			>
				<Drawer.Screen
					name={'index'}
					options={{
						title: 'Мои курсы',
					}}
				/>
				<Drawer.Screen
					name={'profile'}
					options={{
						title: 'Профиль',
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
