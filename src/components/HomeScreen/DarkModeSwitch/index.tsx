import { Heading, HStack, Switch, Text, Tooltip, useColorMode } from "native-base";

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Heading size="sm" style={{ marginTop: 20, paddingBottom: 10 }}>
        How do you prefer?
      </Heading>
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Tooltip label={
          colorMode === `light` ? `Switch to Dark Mode` : `Switch to Light Mode`
        }>
          <Switch
            isChecked={colorMode === `light`}
            onToggle={toggleColorMode}
          />
        </Tooltip>
        <Text>Light</Text>
      </HStack>
    </>
  );
}
