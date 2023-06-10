import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useColorMode,View } from "native-base";

import { BaseScreenProps } from './types';
import { outerViewProps, viewProps } from './styles';

export default function BaseScreen({ style = {}, children }: BaseScreenProps) {
  const { colorMode } = useColorMode();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: `center` }}
      style={{backgroundColor: String(colorMode === `light` ? outerViewProps._light?.bg : outerViewProps._dark?.bg)}}
      enableOnAndroid
      enableAutomaticScroll
    >
      <View {...outerViewProps}><View {...viewProps} style={style}>{ children }</View></View>
    </KeyboardAwareScrollView>
  );
}
