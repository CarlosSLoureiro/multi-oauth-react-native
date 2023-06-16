import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useColorMode,View } from "native-base";

import { BaseScreenProps } from './types';
import { outerViewProps, viewProps } from './styles';

export default function BaseScreen({ style = {}, enableScroll = false, children }: BaseScreenProps) {
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

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: `center` }}
      style={{backgroundColor: String(colorMode === `light` ? outerViewProps._light?.bg : outerViewProps._dark?.bg)}}
      enableOnAndroid
      enableAutomaticScroll
      scrollEnabled={scrollable}
      onKeyboardWillShow={handleKeyboardWillShow}
      onKeyboardWillHide={handleKeyboardWillHide}
    >
      <View {...outerViewProps}><View {...viewProps} style={style}>{ children }</View></View>
    </KeyboardAwareScrollView>
  );
}
