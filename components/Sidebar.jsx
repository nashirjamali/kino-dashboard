<<<<<<< HEAD
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { RiDashboard2Line, RiMessage2Line } from "react-icons/ri";
=======
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { CommentIcon, DashboardIcon, EmailIcon } from './icons';
>>>>>>> 5bd17a52e3833ccb7eba1d01e67092582144deac

export default function Sidebar() {
  return (
    <Box>
<<<<<<< HEAD
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
=======
      <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
>>>>>>> 5bd17a52e3833ccb7eba1d01e67092582144deac
        <Box bg="white" w="345px" maxW="345px" h="100vh" pl="50px" pr="20px">
          {/* Header */}
          <Box py="30px">
            <Heading>Kino</Heading>
          </Box>

          {/* Menu */}
          <Box my="12px">
            <Text color="grey_02" fontSize="16px" fontWeight="bold">
              Main Menu
            </Text>
            <Box id="menu-list" mt="25px">
<<<<<<< HEAD
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Flex py="8px" my="14px" color="primary" align="center">
                  <RiDashboard2Line size={28} />
                  <Text
                    ml="8px"
=======
              <Link href="/" _hover={{ textDecoration: 'none' }}>
                <Flex py="8px" my="14px" color="primary" align="center">
                  <DashboardIcon w="28px" h="28px" />
                  <Text
                    ml="26px"
>>>>>>> 5bd17a52e3833ccb7eba1d01e67092582144deac
                    flex={1}
                    fontFamily="Cairo"
                    fontWeight="bold"
                    fontSize="18px"
                  >
                    Dashboard
                  </Text>
                </Flex>
              </Link>
<<<<<<< HEAD
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Flex py="8px" my="14px" color="grey_01" align="center">
                  <RiMessage2Line size={28} />
                  <Text
                    ml="8px"
                    fontFamily="Cairo"
                    fontWeight="bold"
=======
              <Link href="/" _hover={{ textDecoration: 'none' }}>
                <Flex py="8px" my="14px" color="grey_01" align="center">
                  <EmailIcon w="28px" h="28px" />
                  <Text
                    ml="26px"
                    fontFamily="Cairo"
                    fontWeight="semibold"
>>>>>>> 5bd17a52e3833ccb7eba1d01e67092582144deac
                    fontSize="18px"
                  >
                    Email
                  </Text>
                </Flex>
              </Link>
<<<<<<< HEAD
=======
              <Link href="/" _hover={{ textDecoration: 'none' }}>
                <Flex py="8px" my="14px" color="grey_01" align="center">
                  <CommentIcon w="28px" h="28px" />
                  <Text
                    ml="26px"
                    fontFamily="Cairo"
                    fontWeight="semibold"
                    fontSize="18px"
                  >
                    Chat
                  </Text>
                </Flex>
              </Link>
>>>>>>> 5bd17a52e3833ccb7eba1d01e67092582144deac
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
