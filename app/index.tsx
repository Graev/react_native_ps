import { StyleSheet, View } from 'react-native';
import Logo from '../assets/logo.svg';
import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Colors, Gaps } from '../shared/tokens';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import { Link } from '../shared/Link/Link';

export default function Index() {
	const [error, setError] = useState<string>('');
	const alert = () => {
		setError('Неверный логин или пароль');
		setTimeout(() => {
			setError('');
		}, 5000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Logo style={styles.centred} />
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input placeholder="Пароль" isHideValue={true} />
					<Button title={'Войти'} onPress={alert} />
				</View>
				<Link href={'/restores'} style={styles.centred}>
					Восстановить пароль
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
		justifyContent: 'center',
	},
	content: {
		gap: Gaps.g50,
	},
	form: {
		paddingHorizontal: 55,
		gap: Gaps.g16,
	},
	centred: {
		alignSelf: 'center',
	},
});
