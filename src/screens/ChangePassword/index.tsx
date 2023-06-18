import { useContext, useEffect, useState } from "react";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Pressable, Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";

import ChangePasswordRequest from "@remote/ChangePassword";
import { RequestChangePasswordData } from "@remote/ChangePassword/types";

export default function ChangePasswordScreen () {
  const { setScreen, currentScreen, updateUser, user, addAlert } = useContext(AppContext);

  const [isRequesting, setIsRequesting] = useState(false);
  const [feildWithErrors, setFieldsWithErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState<RequestChangePasswordData>({} as RequestChangePasswordData);

  const onPressBackToAccount = () => {
    setScreen(`Account`);
  };

  const onPressRegister = () => {
    void (async () => {
      try {
        if (!user) return;

        setIsRequesting(true);

        const response = await ChangePasswordRequest(user.token, formData);

        if (!response.error) {
          addAlert({ status: `success`, message: `Your password has been changed successfully!` }, 10000);
          updateUser({
            ...user,
            token: response.token
          });
          setFormData({} as RequestChangePasswordData);
          setFieldsWithErrors([]);
          setScreen(`Account`);
        } else {
          addAlert({ status: `error`, message: response.message ? `${response.error}: ${response?.message}` : response.error }, 5000);
          if (response.fields) {
            setFieldsWithErrors(response.fields);
          }
        }
      } catch (error: any) {
        addAlert({ status: `error`, message: error.message });
      } finally {
        setIsRequesting(false);
      }
    })();
  };

  useEffect(() => {
    setFieldsWithErrors([]);
  }, [formData]);

  useEffect(() => {
    setFormData({} as RequestChangePasswordData);
  }, [currentScreen]);

  return (
    <BaseScreen>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <HStack mt="6" justifyContent="center">
              <Pressable onPress={onPressBackToAccount}>
                <Text color="indigo.500" fontWeight="medium" fontSize="sm" my="12px" textAlign='center'>
                  Back to Account
                </Text>
              </Pressable>
            </HStack>
            <Heading size="lg" mt={5} fontWeight="600" color="coolGray.800" _dark={{
              color: `warmGray.50`
            }}>
              Change Password
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Current Password</FormControl.Label>
                <Input type="password" isDisabled={isRequesting} isInvalid={feildWithErrors.includes(`currentPassword`)} onChangeText={value => setFormData({ ...formData,
                  currentPassword: value
                })} value={formData.currentPassword || ``}/>
                <Text color="#A00" fontSize="xs">You must leave this field empty if you don&apos;t have a registered password</Text>
              </FormControl>
              <FormControl>
                <FormControl.Label>New Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isRequesting} isInvalid={feildWithErrors.includes(`newPassword`)}  onChangeText={value => setFormData({ ...formData,
                  newPassword: value
                })} value={formData.newPassword || ``}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" isRequired isDisabled={isRequesting} isInvalid={feildWithErrors.includes(`confirmPassword`)}  onChangeText={value => setFormData({ ...formData,
                  confirmPassword: value
                })} value={formData.confirmPassword || ``}/>
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                spinnerPlacement="end"
                isLoadingText="Validating"
                isLoading={isRequesting}
                onPress={onPressRegister}
              >
                Submit
              </Button>
            </VStack>
          </Box>
        </Center>
      </Center>
    </BaseScreen>
  );
}
