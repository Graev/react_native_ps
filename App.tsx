import { StyleSheet, View } from "react-native";
import Logo from "./assets/logo.svg";
import { Input } from "./shared/Input/Input";
import { Button } from "./components/Button";
import { Colors, Gaps } from "./shared/tokens";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Logo style={styles.logo} />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Пароль" isHideValue={true} />
          <Button title={"Войти"} onPress={() => {}} />
        </View>
        <Button
          title={"Восстановить пароль"}
          type={"secondary"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
  },
  content: {
    gap: Gaps.g50,
  },
  form: {
    paddingHorizontal: 55,
    gap: Gaps.g16,
  },
  logo: {
    alignSelf: "center",
  },
});
