import  { useEffect, useRef, useState } from "react";
import { PanResponder, Platform } from "react-native";
import { Alert as NativeBaseAlert, Center, Slide, Text } from "native-base";

import { AlertProps } from "./types";

export default function Alert(props: AlertProps) {
  const { open, status, message, setAlert } = props;

  const plusStatusBarPadding = Platform.OS === `ios` ? 50 : 10;

  const [alertBottom, setAlertBottom] = useState(0);
  const [alertPaddingTop, setAlertPaddingTop] = useState(plusStatusBarPadding);

  const range = 25;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newY = Math.round(gestureState.dy * -1);
        if (newY >= 0) {
          setAlertBottom(newY);
        } else {
          const pt = (newY * -1);

          if (pt <= range * 3) {
            setAlertPaddingTop(pt + plusStatusBarPadding);
          }
        }
      },
      onPanResponderEnd: (e, gestureState) => {
        const newY = Math.round(gestureState.dy * -1);
        if (newY >= range) {
          setAlert({
            ...props,
            open: false
          });
        } else {
          setAlertPaddingTop(plusStatusBarPadding);
          setAlertBottom(0);
        }
      },
    })
  ).current;

  useEffect(() => {
    if (open) {
      setAlertBottom(0);
    }
  },[open]);

  return (
    <Center>
      <Slide in={open} placement="top" duration={1000}>
        { /* @ts-ignore */ }
        <NativeBaseAlert _web={{cursor: `grab`}} justifyContent="center" status={status} {...panResponder.panHandlers} bottom={`${alertBottom}px`} pt={`${alertPaddingTop}px`} >
          { /* @ts-ignore */ }
          <Text _web={{ userSelect: `none` }} color={`${status}.700`} m={2} fontWeight="medium">{ message }</Text>
          { /* @ts-ignore */ }
          <Text _web={{ userSelect: `none` }} disabled color={`${status}.500`} mt={2} fontSize={10} fontWeight="medium">Drag to Dimiss</Text>
        </NativeBaseAlert>
      </Slide>
    </Center>
  );
}
