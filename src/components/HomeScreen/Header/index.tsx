import { useEffect,useRef, useState} from "react";
import { Animated, Easing } from "react-native";
import { useColorModeValue,View } from "native-base";

import { HeaderProps } from "./types";
import { containerStyle } from "./styles";

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
    outputRange: useColorModeValue(`Light`, `Dark`) === `Light` ? [`#ADD8E6`, `#EE82EE`] : [`#4b8397`, `#972397`],
  });

  return (
    <View shadow={3} backgroundColor="white" style={{borderRadius: 8}}>
      { /* @ts-ignore */ }
      <Animated.View style={{...containerStyle, backgroundColor: interpolateColors}}>
        {children}
      </Animated.View>
    </View>
  );
}
