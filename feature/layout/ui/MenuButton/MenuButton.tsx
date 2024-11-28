import { StyleSheet, Pressable, PressableProps, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '@shared/tokens';
import MenuButtonIcon from '@assets/icons/burger.svg';

type ButtonLocalProps = PressableProps & {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	navigation: any;
};

export const MenuButton = ({ navigation, ...rest }: ButtonLocalProps) => {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<Pressable
			{...rest}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			onPress={() => navigation.toggleDrawer()}
		>
			<View
				style={{
					...styles.button,
					backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
				}}
			>
				<MenuButtonIcon />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		flex: 1,
	},
});
