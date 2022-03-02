import React from "react";
import { NativeBaseProvider, Box } from "native-base";

const Base = () => {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}

export default Base;