import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = [
  {
    label : 'Home',
    href : '#home'
  },
  {
    label : 'About Me',
    href : '#about'
  },
  {
    label : 'Skills',
    href : '#skills'
  },
  {
    label : 'Projects',
    href : '#projects'
  },
  {
    label : 'Github Work',
    href : '#githubWork'
  },
  {
    label : 'Contact',
    href : '#contact'
  },
  {
    label : 'Resume',
    href : 'https://drive.google.com/file/d/1gP2tJnjl6HR2Y9-xJaZZ13GIo5tDW0Ab/view?usp=sharing'
  },
]

const NavLink = ({children,href}) => (
  <Link
    px={5}
    py={2.5}
    rounded={'xl'}
    fontWeight={'bold'}
    fontSize={'18px'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('red.500', 'red.700'),
      color: 'white'
    }}
    href={href}>
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} style={{position:"fixed",zIndex:"100", width:"100%"}} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            border={'4px solid lightblue'}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src="https://logos.textgiraffe.com/logos/logo-name/Rohini-designstyle-kingdom-l.png" height="90px" />
            </Box>
          </HStack>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          <Button onClick={toggleColorMode} border={'4px solid lightblue'}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon /> }
       
          </Button>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} marginLeft={{base:"-30%",sm:"-30%",md:"0%",lg:"0%",xl:"0%"}}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                    <Box onClick={onClose}>{link.label}</Box>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// doing test
// let's say