import { useContext, useEffect, useState } from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Pressable, Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";
import FacebookIcon from "@components/Icons/FacebookIcon";
import GoogleIcon from "@components/Icons/GoogleIcon";
import TwitterIcon from "@components/Icons/TwitterIcon";
import OAuthLoginButton from "@components/LoginScreen/OAuthLoginButton";

import LoginRequest from "@remote/Login";
import { RequestLoginData } from "@remote/Login/types";

export default function LoginScreen () {
  const { setScreen, currentScreen, addAlert, updateUser } = useContext(AppContext);

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [feildWithErrors, setFieldsWithErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState<RequestLoginData>({} as RequestLoginData);

  const onPressSignIn = () => {
    void (async () => {
      try {
        setIsLoggingIn(true);

        const response = await LoginRequest(formData);

        if (!response.error) {
          addAlert({ status: `success`, message: `Welcome ${response.name.split(` `)[0]}!` }, 10000);
          updateUser(response);
          setFormData({} as RequestLoginData);
          setFieldsWithErrors([]);
        } else {
          addAlert({ status: `error`, message: response.message ? `${response.error}: ${response?.message}` : response.error }, 5000);
          if (response.fields) {
            setFieldsWithErrors(response.fields);
          }
        }
      } catch (error: any) {
        addAlert({ status: `error`, message: error.message });
      } finally {
        setIsLoggingIn(false);
      }
    })();
  };

  useEffect(() => {
    setFormData({} as RequestLoginData);
  }, [currentScreen]);

  const onForgetPassword = () => {
    addAlert({ status: `warning`, message: `The feature "Forget Password" is still not implemented` });
  };

  const onPressSignUp = () => {
    setScreen(`Sign Up`);
  };

  return (
    <BaseScreen>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" mb={5} fontWeight="600" color="coolGray.800" _dark={{
              color: `warmGray.50`
            }}>
              Continue with
            </Heading>
            <HStack space="3" justifyContent="center">
              <OAuthLoginButton
                provider="Google"
                icon={<GoogleIcon size="25px"/>}
              />
              <OAuthLoginButton
                provider="Facebook"
                icon={<FacebookIcon size="28px"/>}
              />
              <OAuthLoginButton
                provider="Twitter"
                icon={<TwitterIcon size="32px"/>}
              />
            </HStack>
            <Heading mt="10" _dark={{
              color: `warmGray.200`
            }} color="coolGray.600" fontWeight="medium" size="xs">
              Sign in with your Email
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input isRequired isDisabled={isLoggingIn} isInvalid={feildWithErrors.includes(`email`)} onChangeText={value => setFormData({ ...formData,
                  email: value
                })} value={formData.email || ``} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isLoggingIn} isInvalid={feildWithErrors.includes(`password`)}  onChangeText={value => setFormData({ ...formData,
                  password: value
                })} value={formData.password || ``}  />
                <Pressable onPress={onForgetPassword}>
                  <Text fontSize="xs" fontWeight="500" color="indigo.500" alignSelf="flex-end" mt="1">
                    Forget Password?
                  </Text>
                </Pressable>
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                spinnerPlacement="end"
                isLoadingText="Logging in"
                isLoading={isLoggingIn}
                onPress={onPressSignIn}
              >
                Sign in
              </Button>
              <Pressable onPress={onPressSignUp}>
                <Text color="indigo.500" fontWeight="medium" fontSize="sm" my="12px" textAlign='center'>
                  Sign Up
                </Text>
              </Pressable>
            </VStack>
          </Box>
        </Center>
      </Center>
    </BaseScreen>
  );
}
