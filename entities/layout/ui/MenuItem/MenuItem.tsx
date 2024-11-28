import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Text, StyleSheet, Pressable, PressableProps, View } from 'react-native';
import { Colors, Fonts, Gaps } from '@shared/tokens';
import { ReactNode, useState } from 'react';

type MenuItemProps = {
	drawer: DrawerContentComponentProps;
	link: string;
	text: string;
	icon?: ReactNode;
};

export const MenuItem = ({
	drawer,
	link,
	text,
	icon,
	...props
}: MenuItemProps & PressableProps) => {
	const [clicked, setClicked] = useState<boolean>(false);

	const isActive = drawer.state.routes[drawer.state.index].name === link;

	return (
		<Pressable
			{...props}
			onPress={() => {
				drawer.navigation.navigate(link);
			}}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
		>
			<View
				style={[
					styles.menuItem,
					isActive && styles.isActive,
					{
						backgroundColor: clicked || isActive ? Colors.violetDark : Colors.black,
					},
				]}
			>
				{icon}
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	menuItem: {
		flexDirection: 'row',
		paddingVertical: 16,
		paddingHorizontal: 24,
		gap: Gaps.g20,
		alignItems: 'center',
	},
	isActive: {
		borderRightWidth: 5,
		borderRightColor: Colors.primary,
	},
	text: {
		fontFamily: Fonts.regular,
		fontSize: Fonts.f16,
		color: Colors.white,
	},
});
