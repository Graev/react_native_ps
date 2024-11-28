import { useEffect } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@shared/tokens';
import { Link } from '@shared/Link/Link';
import Logo from '@assets/logo.svg';
import { CloseDrawer } from '../../../../feature/layout/ui/CloseDrawer/CloseDrawer';
import { useAtom, useSetAtom } from 'jotai';
import { logoutAtom } from '@entities/auth/model/auth.state';
import { loadProfileAtom } from '@entities/user/model/user.state';
import { UserMenu } from '@entities/user/ui/UserMenu/UserMenu';
import { MenuItem } from '@entities/layout/ui/MenuItem/MenuItem';
import ProfileIcon from '@assets/icons/menu/profile-menu.svg';
import CoursesIcon from '@assets/icons/menu/courses-menu.svg';
import ClubIcon from '@assets/icons/menu/club-menu.svg';

const MENU = [
	{
		text: 'Профиль',
		link: 'profile',
		icon: <CoursesIcon />,
	},
	{
		text: 'Курсы',
		link: 'index',
		icon: <ProfileIcon />,
	},
	{
		text: 'Клуб',
		link: 'club',
		icon: <ClubIcon />,
	},
];

export function CustomDrawer(props: DrawerContentComponentProps) {
	const logout = useSetAtom(logoutAtom);
	const [profile, loadProfile] = useAtom(loadProfileAtom);

	useEffect(() => {
		loadProfile().catch(console.error);
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />
				<UserMenu user={profile} />
				{MENU.map((item, index) => (
					<MenuItem drawer={props} {...item} key={index} />
				))}
			</View>
			<View style={styles.footer}>
				<Link onPress={() => logout()} href={'/login'}>
					Выход
				</Link>
				<Logo style={styles.logo} />
			</View>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.black,
	},
	content: {
		flex: 1,
		// paddingTop: 45,
	},

	footer: {
		alignItems: 'center',
		gap: 50,
		marginBottom: 40,
	},
	logo: {
		width: 160,
	},
});
