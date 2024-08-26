import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import OpenEye from "../../assets/eye.svg";
import CloseEye from "../../assets/eye_closed.svg";
import { Colors, Radius } from "../tokens";

type InputProps = TextInputProps & {
  isHideValue?: boolean;
};

const getIcon = (isHide: boolean) => {
  return isHide ? <CloseEye /> : <OpenEye />;
};

export const Input = (props: InputProps) => {
  const { style = {}, isHideValue, ...rest } = props;

  const [isHide, setIsHide] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={StyleSheet.compose(styles.input, style)}
        secureTextEntry={isHideValue && isHide}
        placeholderTextColor={"#AFB2BF"}
      />
      <TouchableOpacity onPress={() => setIsHide(!isHide)}>
        {isHideValue && getIcon(isHide)}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Radius.r5,
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 26,
    paddingVertical: 20,
    height: 58,
  },
  input: {
    color: Colors.gray,
    flexGrow: 1,
    fontSize: 16,
  },
});
