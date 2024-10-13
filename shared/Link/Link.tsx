import { StyleSheet, Text } from 'react-native';
import { LinkProps } from 'expo-router/build/link/Link';
import { Link as LinkRouter } from 'expo-router';
import { Colors, Fonts } from '../tokens';

export const Link = (props: LinkProps<string>) => {
	const { style, ...rest } = props;

	const styleCommon = StyleSheet.compose(styles.link, style);

	return (
		<LinkRouter style={styleCommon} {...rest}>
			{typeof props.children === 'string' ? <Text>{props.children}</Text> : props.children}
		</LinkRouter>
	);
};

const styles = StyleSheet.create({
	link: {
		color: Colors.link,
		fontFamily: Fonts.regular,
		fontSize: Fonts.f18,
		lineHeight: 22,
	},
});
