import  { useEffect, useRef, useState } from "react";
import { PanResponder } from "react-native";
import { Alert as NativeBaseAlert, Center, Slide,Text, View } from "native-base";

import { AlertProps } from "./types";

export default function Alert(props: AlertProps) {
  const { open, status, message, setAlert } = props;

  const [alertBottom, setAlertBottom] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newY = Math.round(gestureState.dy * -1);
        if (newY >= 0) {
          setAlertBottom(newY);
        } else {
          setAlertBottom(0);
        }
      },
      onPanResponderEnd: (e, gestureState) => {
        const newY = Math.round(gestureState.dy * -1);
        if (newY >= 20) {
          setAlert({
            ...props,
            open: false
          });
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
      <Slide in={open} placement="top" duration={1000} delay={3000}>
        <NativeBaseAlert justifyContent="center" status={status} _ios={{pt: 16}} {...panResponder.panHandlers} bottom={`${alertBottom}px`}>
          <Text color={`${status}.600`} m={2} fontWeight="medium">{ message }</Text>
        </NativeBaseAlert>
      </Slide>
    </Center>
  );
}
