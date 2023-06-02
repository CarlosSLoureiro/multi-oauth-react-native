import { useContext, useEffect, useState } from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Pressable, Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";

export default function SignupScreen () {
  const { setScreen, user } = useContext(AppContext);
  const [isRegistering, setIsRegistering] = useState(false);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});

  const onPressBackToLogin = () => {
    setScreen(`Login`);
  };

  const onPressRegister = () => {
    // setIsRegistering(true);

    console.log(`send data to api ->`, formData);
    setErrors({name: `test`});
  };

  useEffect(() => {
    setErrors({});
  }, [formData]);

  useEffect(() => {
    if (user) {
      setScreen(`Home`);
    }
  }, [user]);

  return (
    <BaseScreen>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <HStack mt="6" justifyContent="center">
              <Pressable onPress={onPressBackToLogin}>
                <Text color="indigo.500" fontWeight="medium" fontSize="sm" my="12px" textAlign='center'>
                  Back to Login
                </Text>
              </Pressable>
            </HStack>
            <Heading size="lg" mt={5} fontWeight="600" color="coolGray.800" _dark={{
              color: `warmGray.50`
            }}>
              Sign Up
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Full Name</FormControl.Label>
                <Input isRequired isDisabled={isRegistering} isInvalid={`name` in errors} onChangeText={value => setFormData({ ...formData,
                  name: value
                })} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input isRequired isDisabled={isRegistering} onChangeText={value => setFormData({ ...formData,
                  email: value
                })} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isRegistering} onChangeText={value => setFormData({ ...formData,
                  password: value
                })}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isRegistering} onChangeText={value => setFormData({ ...formData,
                  confirmPassword: value
                })}/>
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                spinnerPlacement="end"
                isLoadingText="Registering"
                isLoading={isRegistering}
                onPress={onPressRegister}
              >
                Register
              </Button>
            </VStack>
          </Box>
        </Center>
      </Center>
    </BaseScreen>
  );
}
