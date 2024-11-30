import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import HomeIcon from '@assets/icons/tab_bar/home.svg';
import CartIcon from '@assets/icons/tab_bar/cart.svg';
import { TabBarItem } from '@entities/layout/ui/TabBar/TabBarItem';

const TAB_BAR_ELEMENTS = [
	{
		title: 'Главная',
		icon: HomeIcon,
		path: '(catalog)',
	},
	{
		title: 'Корзина',
		icon: CartIcon,
		path: 'cart',
	},
];

export function TabBar(pathProps: BottomTabBarProps) {
	return (
		<View style={styles.tabBar}>
			{TAB_BAR_ELEMENTS.flatMap(({ title, icon, path }, index) => [
				<TabBarItem key={title} title={title} Icon={icon} path={path} pathProps={pathProps} />,
				index !== TAB_BAR_ELEMENTS.length - 1 ? (
					<View key={index} style={styles.separateLine} />
				) : null,
			])}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		height: 65,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#fff',
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		shadowColor: '#E4E4E4',
		shadowOffset: { width: 0, height: -10 },
		shadowOpacity: 0.25,
		overflow: 'hidden',
	},
	separateLine: {
		width: 1,
		height: 45,
		backgroundColor: '#E4E4E4',
	},
});
