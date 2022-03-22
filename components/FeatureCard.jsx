import { Box, Grid, GridItem, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { ImportantEmailIcon } from './icons';

function FeatureCard({ featureElement, featureData, featureTitle }) {
  return (
    <Box p="30px" bg="white" rounded="2xl" w="340px" boxShadow="sm">
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Center>{featureElement}</Center>
        </GridItem>
        <GridItem>
          <Text fontFamily="Cairo" fontWeight="bold" fontSize="38px">
            {featureData}
          </Text>
          <Text fontFamily="Cairo" fontWeight="semibold" fontSize="18px" color="grey_01">
            {featureTitle}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FeatureCard;
