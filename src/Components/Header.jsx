import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';


export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const ResumeDownload = () => {
    window.open("https://drive.google.com/file/d/19zcUB9p5vD01OSxUgFPvpIXSXNFa6HNs/view?usp=sharing");
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} width={"100%"} height={'700px'} id="home">
    <Container maxW={{base:"8xl",sm:"8xl",md:"8xl",lg:"6xl"}} align={"center"}>
      <Stack
        align={'left'}
        spacing={{ base: 10, md: 10, sm: 8 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{base:"space-between",sm:"space-between",md:"space-evenly",lg:"space-evenly"}}
        alignItems={"center"}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.5}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={"25px"}
            >
              Hello <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35px"/> {" "} my name is
            </Text>
            {/* <br /> */}
            <Text fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }} as={'span'}>
              Rohini Kushwaha
            </Text>
            <br />
            <Text fontSize={{ base: '3xl', sm: '2xl', lg: '4xl' }}>
              <Flex gap={{base:"5px", sm:"10px",md:"10px",lg:"10px"}} justifyContent={"center"} flexDir={{sm:"column", md:"row", lg:"row", base:"column"}}>
                I'm a 
                <Text color={"red.500"}>
                  <TypeAnimation
                    sequence={['Full Stack Web Developer','MERN Developer', 1000, '']}
                    speed={40}
                    wrapper="h2"
                    repeat={Infinity}
                  />
                </Text>
              </Flex>
            </Text>
            <a download href="Rohini-Kushwaha-Resume.pdf" target="_blank" onClick={ResumeDownload}>
            <Button
              rounded={'xl'}
              size={'lg'}
              fontWeight={'bold'}
              px={10}
              colorScheme={'red.500'}
              bg={'red.500'}
              color={'white'}
              border={'2px solid red'}
              _hover={{ bg: 'transparent', color: 'red.500'}}
              cursor={"pointer"}
              marginTop={'20px'}
              
              >
                Download Resume
            </Button>
            </a>
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>

          <Box
            position={'relative'}
            height={'100%'}
            borderRadius={"50%"}
            boxShadow={'2xl'}
            width={{base:"70%", sm:"70%", md:"80%", lg:"80%"}}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={"./image/editted.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
    </Box>
  );
}