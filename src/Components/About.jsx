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
} from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW={'6xl'} bgGradient="https://upload.wikimedia.org/wikipedia/commons/e/e4/StarfieldSimulation.gif">
      <Stack
        align={'left'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.5}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            align={'left'}>
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
              fontSize={"25px"}
            >
              Hello, my name is
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Rohini Kushwaha
            </Text>
            <br />
            <Text fontSize={{ base: '4xl', sm: '4xl', lg: '4xl' }}>
              <Flex gap={"10px"}>
                I am <Text color={'red.400'}>Full Stack Web Developer</Text>
              </Flex>
            </Text>
            <br />
            <Text fontSize={'20px'} fontWeight={400} color={'gray'} lineHeight={1.5}>
              I am Passionate and skilled full stack web
              developer and a dedicated learner,
              successful at collaborating with teams to
              deliver attractive and engaging results,
              Looking for a challenging role in industry
              to utilize my skills and learn.
            </Text>
            <br />
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              Resume
            </Button>
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
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'80%'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={"https://media-exp1.licdn.com/dms/image/D4D03AQHKVFwBimfmqA/profile-displayphoto-shrink_400_400/0/1665948777373?e=1671667200&v=beta&t=-Vb1EkDPzG46uAb_jyGdgKn0rNJaekg2_c60367an8c"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}