import { IScrollViewProps } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";

export const outerViewProps: IViewProps = {
  _light: { bg: `#eee` },
  _dark: { bg: `#111` },
  _ios: {
    paddingTop: `40px`
  },
  _web: {
    display: `contents`
  }
};

export const viewProps: IViewProps | IScrollViewProps = {
  _light: outerViewProps._light,
  _dark: outerViewProps._dark,
  width: `100%`,
  height: `100%`,
  _web: {
    paddingBottom: `20vh`
  }
};