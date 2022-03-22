import React from 'react';
import { Box, CircularProgress, CircularProgressLabel, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Body from '../layouts/Body';
import FeatureCard from '../components/FeatureCard';
import { ImportantEmailIcon } from '../components/icons';

function Index() {
  return (
    <Body title="Home">
      <Grid templateColumns="repeat(4, 1fr)" gap="38px">
        <GridItem>
          <FeatureCard
            featureElement={
              <CircularProgress value={62} thickness="14px" size="86px" color="accent_02" capIsRound={true}>
                <CircularProgressLabel color="accent_02" fontFamily="Cairo" fontWeight="bold">
                  62%
                </CircularProgressLabel>
              </CircularProgress>
            }
            featureData={215}
            featureTitle="New Email"
          />
        </GridItem>
        <GridItem>
          <FeatureCard
            featureElement={<ImportantEmailIcon w="86px" h="86px" />}
            featureData={519}
            featureTitle="Important Email"
          />
        </GridItem>
      </Grid>
    </Body>
  );
}

export default Index;
