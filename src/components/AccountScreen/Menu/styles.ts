import { IBoxProps } from "native-base";

export const containerBoxProps: IBoxProps = {
  position: `absolute`,
  top: 2,
  right: 2,
  _web: {
    top: 5,
    right: `calc(50% - 250px)`
  }
};