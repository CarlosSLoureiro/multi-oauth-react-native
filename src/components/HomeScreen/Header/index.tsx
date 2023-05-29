import { useEffect,useRef, useState} from "react";
import { Animated, Easing } from "react-native";

import { HeaderProps } from "./types";

export default function Header ({children}: HeaderProps) {
  const [toggle, setToggle] = useState(false);
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prevToggle => !prevToggle);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: toggle ? 1 : 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [toggle]);

  const interpolateColors = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [`#ADD8E6`, `#EE82EE`],
  });

  const containerStyle = {
    backgroundColor: interpolateColors,
    padding: 12,
    borderRadius: 8,
  };

  return (
    <Animated.View style={containerStyle}>
      {children}
    </Animated.View>
  );
}
