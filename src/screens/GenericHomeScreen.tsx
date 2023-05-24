import { Button, Platform, View } from "react-native";
import { useNavigate } from 'react-router-dom';
import { Center, Text,VStack } from "native-base";

import { useNavigation } from '@react-navigation/native';
export default function GenericHomeScreen() {
  let navigateToSettings = () => {};

  if (Platform.OS === `web`) {
    const navigate = useNavigate();

    navigateToSettings = () => {
      navigate(`/settings`);
    };
  } else {
    const navigation = useNavigation();

    navigateToSettings = () => {
      navigation.navigate(`Settings` as unknown as never);
    };
  }

  return (
    <Center _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <View style={{ flex: 1, alignItems: `center`, justifyContent: `center` }}>
          <Text>Home Screen</Text>
          <Button title="Go to Settings" onPress={navigateToSettings} />
        </View>
      </VStack>
    </Center>
  );
}