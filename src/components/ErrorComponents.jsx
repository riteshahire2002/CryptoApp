// eslint-disable-next-line no-unused-vars
import { Alert, AlertIcon } from '@chakra-ui/react';
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Error = ({message}) => {
  return (
  <Alert status="error"
  position={"fixed"}
  bottom={"4"}
  left={"50%"}
  transform={"translateX(-50%)"}
  w={"container.lg"}
>
  <AlertIcon />
  {message}
  </Alert>
  );

}

export default Error;