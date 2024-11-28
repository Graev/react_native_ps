import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { router } from 'expo-router';
import Logo from '@assets/logo.svg';
import { Input } from '@shared/Input/Input';
import { Button } from '@shared/Button/Button';
import { Colors, Gaps } from '@shared/tokens';
import { ErrorNotification } from '@shared/ErrorNotification/ErrorNotification';
import { Link } from '@shared/Link/Link';
import { loginAtom } from '@entities/auth/model/auth.state';

export default function Login() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ accessToken, error, isLoading }, login] = useAtom(loginAtom);

	useEffect(() => {
		if (accessToken) router.push('/');
	}, [accessToken]);

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Logo style={styles.centred} />
				<View style={styles.form}>
					<Input placeholder="Email" onChangeText={setEmail} value={email} />
					<Input
						placeholder="Пароль"
						isHideValue={true}
						onChangeText={setPassword}
						value={password}
					/>
					<Button
						title={'Войти'}
						onPress={() => login({ email, password })}
						isLoading={isLoading}
					/>
				</View>
				<Link href={'/restore'} style={styles.centred}>
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
