import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Body from '../layouts/Body';

function Index() {
  return (
    <Body title="Trending">
      <Box>
        <Heading>Ini Halaman Home</Heading>
        <Text>Hello</Text>
      </Box>
    </Body>
  );
}

export default Index;
