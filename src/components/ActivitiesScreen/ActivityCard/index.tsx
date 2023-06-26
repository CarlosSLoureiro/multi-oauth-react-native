import { Center, HStack, Icon, Image, Text, View, VStack } from "native-base";

import { ActivityCardProps } from "./types";
import { cardStyles } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ActivityCard ({ activity = undefined }: ActivityCardProps) {
  const date = new Date();

  return (
    <Center w="100%">
      <HStack {...cardStyles.cardStack}>
        <View {...cardStyles.profile}>
          <Image
            alt='User Picture'
            source={{ uri: `https://pbs.twimg.com/profile_images/1599884893919518727/dNC2Y1A7.jpg` }}
            style={{ flex: 1, width: undefined, height: undefined }}
            resizeMode="cover"
          />
        </View>
        <VStack {...cardStyles.descriptionStack}>
          <Text {...cardStyles.name}>Carlos Loureiro</Text>
          <Text>Has logged in using his Google account</Text>
          <HStack space="2" alignItems="center">
            <Icon
              as={<MaterialCommunityIcons name='clock-outline' />}
              {...cardStyles.icon}
            />
            <Text {...cardStyles.time}>
              {date.toLocaleDateString(`en-US`, { weekday: `long`, year: `numeric`, month: `long`, day: `numeric` }) }
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Center>
  );
}