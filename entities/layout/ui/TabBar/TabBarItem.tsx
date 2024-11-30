import { Pressable, Text, View, StyleSheet } from 'react-native';
import { FC, useState } from 'react';
import { SvgProps } from 'react-native-svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import SelectGradientIcon from '@assets/icons/tab_bar/select_gradient.svg';
import { Colors, Fonts } from '@shared/tokens';

type TabBarItemProps = {
	title: string;
	Icon: FC<SvgProps>;
	path: string;
	pathProps: BottomTabBarProps;
};

export function TabBarItem({ title, Icon, path, pathProps }: TabBarItemProps) {
	const [isPressed, setIsPressed] = useState(false);
	const isActive = pathProps.state.routes[pathProps.state.index].name === path;

	return (
		<Pressable
			onPress={() => pathProps.navigation.navigate(path)}
			onPressIn={() => setIsPressed(true)}
			onPressOut={() => setIsPressed(false)}
		>
			<View style={styles.item}>
				<View style={styles.iconContainer}>
					<Icon style={styles.icon} fill={isActive ? '#C67C4E' : '#D2D2D2'} />
					{isActive && <SelectGradientIcon style={styles.gradient} />}
				</View>
				<Text style={styles.text}>{title}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	text: {
		fontSize: 14,
		marginTop: 3,
		fontFamily: Fonts.regular,
		color: Colors.gray9B,
	},
	iconContainer: {
		width: 24,
		marginRight: 9,
		alignItems: 'center',
	},
	icon: {
		marginBottom: 5,
		width: 24,
		height: 24,
	},
	gradient: {
		width: 10,
		height: 5,
		borderRadius: 18,
	},
});
