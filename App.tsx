import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./shared/Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ gap: 24 }}>
        <View style={{ gap: 8 }}>
          <Text style={styles.header}>
            Одно из самых вкусных кофе в городе!
          </Text>
          <Text style={styles.description}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
        </View>
        <Button label={"Начать"} onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 43,
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 34,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#A9A9A9",
    textAlign: "center",
  },
  button: {},
});
