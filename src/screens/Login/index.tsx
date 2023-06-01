import { useState } from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack } from "native-base";

import BaseScreen from "@components/BaseScreen";
import FacebookIcon from "@components/HomeScreen/Icons/FacebookIcon";
import GoogleIcon from "@components/HomeScreen/Icons/GoogleIcon";
import OAuth2LoginButton from "@components/LoginScreen/OAuth2LoginButton";

export default function LoginScreen () {
  const [loggingIn, setLoggingIn] = useState(false);
  return (
    <BaseScreen>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" mb={5} fontWeight="600" color="coolGray.800" _dark={{
              color: `warmGray.50`
            }}>
              Sign in
            </Heading>
            <OAuth2LoginButton
              icon={<GoogleIcon size="20px"/>}
              endpoint="/auth/google"
              title="Continue with Google"
            />
            <OAuth2LoginButton
              icon={<FacebookIcon size="22px"/>}
              endpoint="/auth/facebook"
              title="Continue with Facebook"
            />
            <Heading mt="10" _dark={{
              color: `warmGray.200`
            }} color="coolGray.600" fontWeight="medium" size="xs">
              Sign in with your Email
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
                <Link _text={{
                  fontSize: `xs`,
                  fontWeight: `500`,
                  color: `indigo.500`
                }} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                spinnerPlacement="end"
                isLoadingText="Logging in"
                isLoading={loggingIn}
                onPress={() => setLoggingIn(true)}
              >
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: `warmGray.200`
                }}>
                  Im a new user.{` `}
                </Text>
                <Link _text={{
                  color: `indigo.500`,
                  fontWeight: `medium`,
                  fontSize: `sm`
                }} href="#">
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Center>
    </BaseScreen>
  );
}
