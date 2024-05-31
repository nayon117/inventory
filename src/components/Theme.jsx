import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const Theme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      boxShadow="md"
      px="4"
      py="2"
      rounded="md"
      background={{ default: "white", _dark: "gray.800" }}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
export default Theme;
