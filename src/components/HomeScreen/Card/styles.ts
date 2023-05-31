import { ICenterProps } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export const centerProps: ICenterProps = {
  w: 150,
  h: 110,
  mt: 7,
  _dark: { bg: `coolGray.500` },
  _light: { bg: `coolGray.200` },
  shadow: 3,
  rounded: `md`
};

export const hStackProps: IHStackProps = {
  space: 0,
  flex: 1,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`
};