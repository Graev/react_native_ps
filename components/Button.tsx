import {
  TouchableOpacityProps,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Colors, Radius } from "../shared/tokens";

type ButtonLocalProps = TouchableOpacityProps & {
  title: string;
  type?: "primary" | "secondary";
};

export const Button = (props: ButtonLocalProps) => {
  const { type = "primary", style: extStyle, title, ...rest } = props;

  const style = StyleSheet.compose(
    styles.common,
    styles[type] || styles.primary,
  );

  const combinedStyles = StyleSheet.compose(style, extStyle);

  const textStyle = type === "secondary" ? styles.secondaryText : styles.text;

  return (
    <TouchableOpacity {...rest} style={combinedStyles}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
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
    color: "#FAFAFA",
    fontSize: 18,
  },
  secondaryText: {
    color: Colors.link,
    fontSize: 18,
  },
});
