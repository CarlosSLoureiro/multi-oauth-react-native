import { ScrollView, View } from "native-base";

import { BaseScreenProps } from './types';
import { outerViewProps,viewProps } from './styles';

export default function BaseScreen ({ scrollable = false, style = {}, children }: BaseScreenProps) {
  if (scrollable) {
    return (<View {...outerViewProps}><ScrollView {...viewProps} style={style}>{ children }</ScrollView></View>);
  } else {
    return (<View {...outerViewProps}><View {...viewProps} style={style}>{ children }</View></View>);
  }
}