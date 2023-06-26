import { InterfaceViewProps } from "native-base/lib/typescript/components/basic/View/types";
import { InterfaceSkeletonProps,ISkeletonTextProps } from "native-base/lib/typescript/components/composites/Skeleton/types";
import { InterfaceIconProps } from "native-base/lib/typescript/components/primitives/Icon/types";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";

export const cardStyles: {
  cardStack: InterfaceHStackProps;
  profile: InterfaceViewProps;
  name: InterfaceTextProps;
  descriptionStack: InterfaceHStackProps;
  icon: InterfaceIconProps;
  time: InterfaceTextProps;
} = {
  cardStack: {
    w:`90%`,
    p: `4`,
    my:`2`,
    maxW: `400`,
    borderWidth: `1`,
    space: 8,
    rounded: `md`,
    _light: {
      borderColor: `#c5c5c5`
    },
    _dark: {
      borderColor: `#3a3a3a`
    }
  },
  profile: {
    flex: `1`,
    h: `100%`,
    alignSelf: `center`,
    rounded: `xl`,
    overflow: `hidden`
  },
  name: {
    fontSize:`20`,
    color:`amber.300`,
    bold: true
  },
  descriptionStack: {
    flex: `2`,
    space: `4`
  },
  icon: {
    size: 5,
    _light: {
      color: `#000`
    },
    _dark: {
      color: `#fff`
    }
  },
  time: {
    color: `indigo.300`
  }
};

export const skeletonStyles: {
  cardStack: InterfaceHStackProps;
  picture: InterfaceSkeletonProps;
  name: InterfaceSkeletonProps;
  descriptionStack: InterfaceHStackProps;
  description: InterfaceSkeletonProps & ISkeletonTextProps;
  timeStack: InterfaceHStackProps;
  timeIcon: InterfaceSkeletonProps;
  timeText: InterfaceSkeletonProps;
} = {
  cardStack: cardStyles.cardStack,
  picture: {
    flex: `1`,
    h: `100%`,
    alignSelf: `center`,
    rounded: `xl`,
    _dark: {
      startColor: `#4a4a4a`
    },
    _light: {
      startColor: `#c8c8c8`
    }
  },
  name: {
    h: `6`,
    startColor: `amber.300`
  },
  descriptionStack: {
    flex: `2`,
    space: `4`
  },
  description: {
    lines: 2,
    _dark: {
      startColor: `#4a4a4a`
    },
    _light: {
      startColor: `#c8c8c8`
    }
  },
  timeStack: {
    space: `2`,
    alignItems: `center`
  },
  timeIcon: {
    size: `5`,
    rounded: `full`,
    _dark: {
      startColor: `#4a4a4a`
    },
    _light: {
      startColor: `#c8c8c8`
    }
  },
  timeText: {
    h: `3`,
    flex: `1`,
    rounded: `full`,
    startColor: `indigo.300`
  }
};