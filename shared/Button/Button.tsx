import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "../tokens";

type ButtonProps = {
  label: string;
} & TouchableOpacityProps;

export const Button = (props: ButtonProps) => {
  const style = StyleSheet.compose(styles.button, props.style);

  return (
    <TouchableOpacity style={style}>
      <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
    borderRadius: 16,
  },
});
