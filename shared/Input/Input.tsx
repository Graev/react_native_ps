import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';
import OpenEye from '../../assets/icons/eye.svg';
import CloseEye from '../../assets/icons/eye_closed.svg';
import { Colors, Fonts, Radius } from '../tokens';

type InputProps = TextInputProps & {
	isHideValue?: boolean;
};

const getIcon = (isHide: boolean) => {
	const style = { flexShrink: 0 };
	return isHide ? <CloseEye style={style} /> : <OpenEye />;
};

export const Input = (props: InputProps) => {
	const { style = {}, isHideValue, ...rest } = props;

	const [isHide, setIsHide] = useState<boolean>(true);

	return (
		<View style={styles.container}>
			<TextInput
				{...rest}
				style={StyleSheet.compose(styles.input, style)}
				secureTextEntry={isHideValue && isHide}
				placeholderTextColor={'#AFB2BF'}
			/>
			<Pressable style={styles.icon} onPress={() => setIsHide(!isHide)}>
				{isHideValue && getIcon(isHide)}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: Radius.r5,
		backgroundColor: Colors.violetDark,
		paddingLeft: 26,
		paddingVertical: 20,
		height: 58,
	},
	input: {
		flex: 1,
		color: Colors.gray,
		flexGrow: 1,
		fontSize: 16,
		fontFamily: Fonts.regular,
	},
	icon: {
		flexShrink: 0,
		paddingHorizontal: 15,
	},
});
