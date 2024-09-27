import { StyleSheet, Text, Dimensions, Animated } from "react-native";
import { Colors } from "../tokens";
import { useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotification.props";

const useAnimationShow = () => {
  const value = new Animated.Value(-100);

  const DURATION = 300;
  const USE_NATIVE_DRIVER = true;

  const show = (callback?: Animated.EndCallback) => {
    Animated.timing(value, {
      toValue: 0,
      duration: DURATION,
      useNativeDriver: USE_NATIVE_DRIVER,
    }).start(callback);
  };

  const hide = (callback?: Animated.EndCallback) => {
    Animated.timing(value, {
      toValue: -100,
      duration: DURATION,
      useNativeDriver: USE_NATIVE_DRIVER,
    }).start(callback);
  };

  return { value, show, hide };
};

export const ErrorNotification = (props: ErrorNotificationProps) => {
  const { error } = props;

  const [isShow, setIsShow] = useState<boolean>(false);

  const { value, show, hide } = useAnimationShow();

  useEffect(() => {
    if (!error) return;
    setIsShow(true);
  }, [error]);

  if (!isShow) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        styles.error,
        {
          transform: [
            {
              translateY: value,
            },
          ],
        },
      ]}
      onLayout={() =>
        show(() => {
          setTimeout(() => {
            hide(() => setIsShow(false));
          }, 3000);
        })
      }
    >
      <Text style={styles.message}>{error}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    top: 0,
    padding: 15,
    paddingTop: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    backgroundColor: Colors.red,
  },
  message: {
    color: Colors.white,
    fontSize: 16,
  },
});
