import { useCallback, useEffect, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useColorMode, View } from "native-base";

import { BaseScreenProps } from './types';
import { outerViewProps, viewProps } from './styles';

import { useFocusEffect } from "@react-navigation/native";

export default function BaseScreen({ style = {}, enableScroll = false, onScrollToEnd = undefined, onFocus = undefined, onUnfocus = undefined, children }: BaseScreenProps) {
  const { colorMode } = useColorMode();
  const [ scrollable, setScrollable ] = useState(enableScroll);

  const handleKeyboardWillShow = () => {
    if (!enableScroll) {
      setScrollable(true);
    }
  };

  const handleKeyboardWillHide = () => {
    if (!enableScroll) {
      setScrollable(false);
    }
  };

  if (Platform.OS !== `web`) {
    useFocusEffect(
      useCallback(() => {
        if (onFocus) {
          onFocus();
        }

        return onUnfocus;
      }, [])
    );
  } else if (onFocus) {
    useEffect(() => {
      onFocus();
    }, []);
  }

  useEffect(() => {
    if (Platform.OS !== `web`) return;

    const handleScrollWeb = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      if (scrollTop + windowHeight >= (documentHeight - 100) && onScrollToEnd) {
        onScrollToEnd();
      }
    };

    window.addEventListener(`scroll`, handleScrollWeb);

    return () => {
      window.removeEventListener(`scroll`, handleScrollWeb);
    };
  }, [onScrollToEnd]);

  const handleScrollEndMobile = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;

    const isScrollAtEnd = scrollOffset >= (contentHeight - scrollViewHeight) - 25;
    if (isScrollAtEnd && onScrollToEnd) {
      onScrollToEnd();
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: `center` }}
      style={{backgroundColor: String(colorMode === `light` ? outerViewProps._light?.bg : outerViewProps._dark?.bg)}}
      enableOnAndroid
      enableAutomaticScroll
      scrollEnabled={scrollable}
      onKeyboardWillShow={handleKeyboardWillShow}
      onKeyboardWillHide={handleKeyboardWillHide}
      onScroll={handleScrollEndMobile}
    >
      <View {...outerViewProps}>
        <View {...viewProps} style={style}>{children}</View>
      </View>
    </KeyboardAwareScrollView>
  );
}
