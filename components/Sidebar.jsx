import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { RiDashboard2Line, RiMessage2Line } from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
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
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Flex py="8px" my="14px" color="primary" align="center">
                  <RiDashboard2Line size={28} />
                  <Text
                    ml="8px"
                    flex={1}
                    fontFamily="Cairo"
                    fontWeight="bold"
                    fontSize="18px"
                  >
                    Dashboard
                  </Text>
                </Flex>
              </Link>
              <Link href="/" _hover={{ textDecoration: "none" }}>
                <Flex py="8px" my="14px" color="grey_01" align="center">
                  <RiMessage2Line size={28} />
                  <Text
                    ml="8px"
                    fontFamily="Cairo"
                    fontWeight="bold"
                    fontSize="18px"
                  >
                    Email
                  </Text>
                </Flex>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
