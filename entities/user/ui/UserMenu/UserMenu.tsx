import { Image, StyleSheet, Text, View } from 'react-native';
import ProfileIcon from '@assets/icons/profile.svg';
import { User } from '../../model/user.model';
import { Colors, Fonts, Gaps } from '@shared/tokens';

export const UserMenu = ({ user }: { user: User | null }) => {
	if (!user) return null;
	return (
		<View style={styles.profile}>
			{user?.photo ? (
				<Image source={{ uri: user?.photo }} style={[styles.photo, styles.photoBorder]} />
			) : (
				<ProfileIcon style={styles.photo} />
			)}
			<Text style={styles.name}>
				{user?.name} {user?.surname}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	profile: {
		alignItems: 'center',
		gap: Gaps.g8,
		marginTop: 45,
		marginBottom: 40,
	},
	photo: {
		width: 70,
		height: 70,
		borderRadius: 50,
	},
	photoBorder: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: Colors.grayBorder,
	},
	name: {
		color: Colors.white,
		fontFamily: Fonts.regular,
		fontSize: Fonts.f16,
	},
});
