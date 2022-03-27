import { Box, CircularProgress, CircularProgressLabel, Stack } from '@chakra-ui/react';
import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { ImportantEmailIcon } from '../components/icons';
import Body from '../layouts/Body';

function Index() {
  return (
    <Body title="Home">
      <Stack direction={['column', 'row']} spacing="24px" align="stretch">
        <Box flex={1}>
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
        </Box>
        <Box flex={1}>
          <FeatureCard
            featureElement={
              <CircularProgress value={62} thickness="14px" size="86px" color="accent_01" capIsRound={true}>
                <CircularProgressLabel color="accent_01" fontFamily="Cairo" fontWeight="bold">
                  38%
                </CircularProgressLabel>
              </CircularProgress>
            }
            featureData={84}
            featureTitle="Unread Emails"
          />
        </Box>
        <Box flex={1}>
          <FeatureCard
            featureElement={<ImportantEmailIcon w="86px" h="86px" />}
            featureData={519}
            featureTitle="Important Email"
          />
        </Box>
        <Box flex={1}>
          <FeatureCard
            featureElement={<ImportantEmailIcon w="86px" h="86px" />}
            featureData={519}
            featureTitle="Important Email"
          />
        </Box>
      </Stack>
    </Body>
  );
}

export default Index;
