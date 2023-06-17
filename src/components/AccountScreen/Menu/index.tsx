import { useContext, useEffect } from 'react';
import { Box, Button, HStack, Icon, Stagger, Text, useDisclose, View } from 'native-base';

import AppContext from '@contexts/AppContext';

import { containerBoxProps } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AccountMenu () {
  const { updateUser, currentScreen } = useContext(AppContext);
  const { isOpen, onToggle, onClose } = useDisclose();

  const onLogout = () => {
    updateUser(undefined);
  };

  useEffect(() => {
    onClose();
  }, [currentScreen]);

  return <Box {...containerBoxProps}>
    <HStack justifyContent="flex-end">
      <Button variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="cyan.400">
        <View flex={1} flexDir="row">
          {isOpen && <Text paddingRight={2}>Settings</Text>}
          <Icon as={<MaterialCommunityIcons name='cogs' />} size="5" color="warmGray.50" _dark={{
            color: `warmGray.50`
          }} />
        </View>
      </Button>
    </HStack>
    <Box alignItems="flex-end">
      <Stagger visible={isOpen} initial={{
        opacity: 0,
        scale: 0,
        translateY: -50,
        translateX: 50
      }} animate={{
        translateY: 0,
        translateX: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: `spring`,
          mass: 0.8,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }} exit={{
        translateY: -34,
        translateX: 34,
        scale: 0.5,
        opacity: 0,
        transition: {
          duration: 100,
          stagger: {
            offset: 30,
            reverse: true
          }
        }
      }}>
        <Button mt="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full">
          <View flex={1} flexDir="row">
            <Text paddingRight={2}>Change Password</Text>
            <Icon as={<MaterialCommunityIcons name='lock-check' />} size="5" _dark={{
              color: `warmGray.50`
            }} color="warmGray.50" />
          </View>
        </Button>
        <Button mt="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" onPress={onLogout}>
          <View flex={1} flexDir="row">
            <Text paddingRight={2}>Logout</Text>
            <Icon as={<MaterialCommunityIcons name='logout-variant' />} size="5" _dark={{
              color: `warmGray.50`
            }} color="warmGray.50" />
          </View>
        </Button>
      </Stagger>
    </Box>
  </Box>;
}

