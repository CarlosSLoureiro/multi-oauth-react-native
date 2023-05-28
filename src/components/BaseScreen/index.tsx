import { ScrollView, View } from "native-base";

import { BaseScreenProps } from './types';
import { viewProps } from './styles';

export default function BaseScreen ({ scrollable = false, style = {}, children }: BaseScreenProps) {
  if (scrollable) {
    return (<ScrollView {...viewProps} style={style}>{ children }</ScrollView>);
  } else {
    return (<View {...viewProps} style={style}>{ children }</View>);
  }
}