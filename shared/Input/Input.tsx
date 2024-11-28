import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import SearchIcon from '@assets/icons/search.svg';
import { Colors, Fonts, Radius } from '../tokens';

export const InputIconsEnum = {
	search: SearchIcon,
};

type InputProps = TextInputProps & {
	icon?: keyof typeof InputIconsEnum;
	color?: string;
};

export const Input = (props: InputProps) => {
	const { style = {}, color, icon, ...rest } = props;

	const Icon = icon ? InputIconsEnum[icon] : null;

	return (
		<View style={[styles.container, style]}>
			{Icon && <Icon style={styles.icon} />}
			<TextInput {...rest} style={[styles.input, { color }]} placeholderTextColor={'#AFB2BF'} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: Radius.r16,
		backgroundColor: Colors.whileEA,
		paddingHorizontal: 16,
		paddingVertical: 19,
		height: 56,
	},
	input: {
		flex: 1,
		color: Colors.blackText,
		flexGrow: 1,
		fontSize: 14,
		fontFamily: Fonts.regular,
	},
	icon: {
		flexShrink: 0,
		marginRight: 12,
	},
});
