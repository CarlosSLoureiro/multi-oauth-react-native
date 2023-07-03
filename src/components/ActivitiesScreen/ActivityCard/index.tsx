import { Center, HStack, Icon, Image, Text, View, VStack } from "native-base";

import { ActivityCardProps } from "./types";
import { cardStyles } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from 'date-fns';

export default function ActivityCard ({ activity }: ActivityCardProps) {
  const defaultPicture = `https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360`;

  return (
    <Center w="100%">
      <HStack {...cardStyles.cardStack}>
        <View {...cardStyles.profile}>
          <Image
            alt='User Picture'
            testID="user-picture"
            source={{ uri: activity.user.picture !== null ? activity.user.picture : defaultPicture }}
            style={{ flex: 1, width: undefined, height: undefined }}
            resizeMode="cover"
          />
        </View>
        <VStack {...cardStyles.descriptionStack}>
          <Text {...cardStyles.name}>{ activity.user.name }</Text>
          <Text>{ activity.message }</Text>
          <HStack space="2" alignItems="center">
            <Icon
              as={<MaterialCommunityIcons name='clock-outline' />}
              {...cardStyles.icon}
            />
            <Text {...cardStyles.time}>
              { format(new Date(activity.date), `EEE MMM dd yyyy HH:mm:ss`) }
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Center>
  );
}