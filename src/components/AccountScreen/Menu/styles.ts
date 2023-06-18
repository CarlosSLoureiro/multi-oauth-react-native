import { IBoxProps, IButtonProps, IIconProps, ITextProps } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export const containerBoxProps: IBoxProps = {
  position: `absolute`,
  top: 2,
  right: 2,
  _web: {
    top: 5,
    right: `calc(50% - 250px)`
  }
};

export const settingsButton: {
  hStack: IHStackProps;
  button: IButtonProps;
  view: IViewProps;
  text: ITextProps;
  icon: IIconProps;
} = {
  hStack: {
    justifyContent: `flex-end`
  },
  button: {
    variant: `solid`,
    borderRadius: `full`,
    shadow: 5,
    _light: {
      bg: `#fff`,
      _hover: {
        bg: `#e3e3e3`
      },
      _pressed: {
        bg: `#c3c3c3`
      }
    },
    _dark: {
      bg: `#434343`,
      _hover: {
        bg: `#343434`
      },
      _pressed: {
        bg: `#2d2d2d`
      }
    }
  },
  view: {
    flex: 1,
    flexDir: `row`,
    alignItems: `center`
  },
  text: {
    paddingRight: 2,
    fontSize: `md`
  },
  icon: {
    size: 8,
    _web: {
      size: 7
    },
    _light: {
      color: `#000`
    },
    _dark: {
      color: `#fff`
    }
  }
};

export const menuButtons: {
  box: IBoxProps;
  button: IButtonProps;
  view: IViewProps;
  text: ITextProps;
  icon: IIconProps;
} = {
  box: {
    alignItems: `flex-end`
  },
  button: {
    ...settingsButton.button,
    mt: 3
  },
  view: settingsButton.view,
  text: settingsButton.text,
  icon: settingsButton.icon
};