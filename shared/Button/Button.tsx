import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

type ButtonProps = {
  title: string;
} & PressableProps;

export const Button = ({ title, ...props }: ButtonProps) => {
  const style = StyleSheet.compose(
    styles.button,
    typeof props.style !== "function" ? props.style : {},
  );

  return (
    <Pressable {...props}>
      <View style={style}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
    borderRadius: Radius.r16,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: Fonts.f16,
  },
});
