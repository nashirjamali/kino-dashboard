import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Admin from '../layouts/Admin';

const Index = function () {
  return (
    <Box bg="primary">
      <Heading>Hello</Heading>
      <Text>Hello</Text>
    </Box>
  );
};

Index.layout = Admin;

export default Index;
