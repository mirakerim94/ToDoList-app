import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const DarkBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? (
        <SunIcon color="orange.500" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
  );
};
