import { Box, Spinner, VStack } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loader;