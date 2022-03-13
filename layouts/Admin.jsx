import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

export default function Admin() {
  return (
    <Flex>
      <Sidebar />
      <Box bg="grey_03" h="100vh" flex={1} />
    </Flex>
  );
}
