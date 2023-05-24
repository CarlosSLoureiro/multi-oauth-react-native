import { Button,Platform,View } from "react-native";
import { useNavigate } from 'react-router-dom';
import { Center, Text,VStack } from "native-base";

import { useNavigation } from '@react-navigation/native';

export default function GenericSettingsScreen() {
  let navigateToHome = () => {};

  if (Platform.OS === `web`) {
    const navigate = useNavigate();

    navigateToHome = () => {
      navigate(`/`);
    };
  } else {
    const navigation = useNavigation();

    navigateToHome = () => {
      navigation.navigate(`Home` as unknown as never);
    };
  }

  return (
    <Center _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <View style={{ flex: 1, alignItems: `center`, justifyContent: `center` }}>
          <Text>Settings Screen</Text>
          <Button title="Go to Home" onPress={navigateToHome} />
        </View>
      </VStack>
    </Center>
  );
}