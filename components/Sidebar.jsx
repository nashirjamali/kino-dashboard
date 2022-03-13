import NextLink from 'next/link';
import { Box, CloseButton, Flex, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Trending', icon: FiTrendingUp, href: '/trendings' },
  { name: 'Explore', icon: FiCompass, href: '/explores' },
  { name: 'Favourites', icon: FiStar, href: '/favourites' },
  { name: 'Settings', icon: FiSettings, href: '/settings' },
];

function SideBar({ onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Kino
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

function NavItem({ href, icon, _target, children, ...rest }) {
  return (
    <NextLink href={href} passHref scroll={false}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link target={_target} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'primary',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
}

export default SideBar;
