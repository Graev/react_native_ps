import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "./shared/Button/Button";
import { Fonts } from "./shared/tokens";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/welcome-background.png")}
        imageStyle={{
          resizeMode: "contain",
          top: -166,
        }}
      >
        <Text style={styles.header}>Одно из самых вкусных кофе в городе!</Text>
        <View style={{ gap: 24 }}>
          <Text style={styles.description}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
          <Button title={"Начать"} onPress={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingBottom: 43,
  },
  background: {
    flex: 1,
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  header: {
    fontSize: Fonts.f34,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: Fonts.f14,
    color: "#A9A9A9",
    textAlign: "center",
  },
});
