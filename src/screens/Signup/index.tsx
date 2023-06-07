import { useContext, useEffect, useState } from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Pressable, Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";

import SignupRequest from "@remote/Signup";
import { RequestSignupData } from "@remote/Signup/types";

export default function SignupScreen () {
  const { setScreen, updateUser, addAlert } = useContext(AppContext);
  const [isRegistering, setIsRegistering] = useState(false);

  const [feildWithErrors, setFieldsWithErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState<RequestSignupData>({} as RequestSignupData);

  const onPressBackToLogin = () => {
    setScreen(`Login`);
  };

  const onPressRegister = () => {
    void (async () => {
      try {
        setIsRegistering(true);

        const response = await SignupRequest(formData);

        if (!response.error) {
          addAlert({ status: `success`, message: `Welcome ${response.name.split(` `)[0]}! Your account has successfully registered!` }, 10000);
          updateUser(response);
        } else {
          addAlert({ status: `error`, message: response.message ? `${response.error}: ${response?.message}` : response.error }, 5000);
          if (response.fields) {
            setFieldsWithErrors(response.fields);
          }
        }
      } catch (error: any) {
        addAlert({ status: `error`, message: error.message });
      } finally {
        setIsRegistering(false);
      }
    })();
  };

  useEffect(() => {
    setFieldsWithErrors([]);
  }, [formData]);

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
                <Input isRequired isDisabled={isRegistering} isInvalid={feildWithErrors.includes(`name`)} onChangeText={value => setFormData({ ...formData,
                  name: value
                })} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input isRequired isDisabled={isRegistering} isInvalid={feildWithErrors.includes(`email`)} onChangeText={value => setFormData({ ...formData,
                  email: value
                })} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isRegistering} isInvalid={feildWithErrors.includes(`password`)}  onChangeText={value => setFormData({ ...formData,
                  password: value
                })}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isRegistering} isInvalid={feildWithErrors.includes(`confirmPassword`)}  onChangeText={value => setFormData({ ...formData,
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
