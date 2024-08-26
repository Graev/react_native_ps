import {
  StyleSheet,
  Text,
  Pressable,
  PressableProps,
  View,
} from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

type ButtonLocalProps = PressableProps & {
  title: string;
  type?: "primary" | "secondary";
};

export const Button = (props: ButtonLocalProps) => {
  const { type = "primary", style: extStyle, title, ...rest } = props;

  const style = StyleSheet.compose(
    styles.common,
    styles[type] || styles.primary,
  );

  // const combinedStyles = StyleSheet.compose(style, extStyle);

  const textStyle = type === "secondary" ? styles.secondaryText : styles.text;

  return (
    <Pressable {...rest}>
      <View style={style}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  common: {
    alignItems: "center",
  },

  primary: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    borderRadius: Radius.r10,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 58,
  },
  secondary: {
    // backgroundColor: "yellow",
  },

  text: {
    color: Colors.white,
    fontSize: Fonts.f18,
  },
  secondaryText: {
    color: Colors.link,
    fontSize: Fonts.f18,
  },
});
