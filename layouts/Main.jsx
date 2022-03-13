import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function Main({ children, router }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SideBar onClose={() => onClose} display={{ base: 'none', md: 'block' }} path={router.asPath} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <NavBar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
export default Main;
