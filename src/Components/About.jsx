import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Image,
  UnorderedList,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import "./styles/About.css"
import { useState } from 'react';

export default function About() {

  const [Exp, setExp] = useState(false);
  const [About, setAbout] = useState(true)

  const handleAbout = () => {
    setExp(false)
    setAbout(true)
  }
  const handleExperience = () => {
    setAbout(false)
    setExp(true)
  }

  return (
    <Container maxW={'90%'} marginTop={'80px'} id="about">
      <Heading fontSize={{ base: "22px", sm: "32px", md: "40px", lg: "48px" }} style={{ display: "flex", gap: "10px", justifyContent: "center" }}>...All <Text color={'red.500'}>About</Text> Me...</Heading>
      <Stack
        align={{base:"center", md:"center",sm:"center", xsm:"center",lg:"",xl:""}}
        spacing={{ base: 8, md: 10 }}
        justify={{base:"center", md:"center",sm:"center",xsm:"center",lg:"",xl:""}}
        py={{ base: 20, md: 28 }}
        marginTop={"-40px"}
        direction={{ base: 'column', md: 'column', sm:"column", lg:"row", xl:"row" }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'100%'}
            rounded={'2xl'}
            width={'100%'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={"https://i.pinimg.com/originals/14/b0/83/14b083af7954ae3e6417d0b4fc13b61e.gif"}
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <HStack display={"flex"} justifyContent={{base:"center", md:"center",sm:"center",lg:"left",xl:"left"}}>
            <Button onClick={() => handleAbout()} backgroundColor={About ? "red.500" : ""} color={About ? "white" : ""} _hover={{backgroundColor:About ? "red.500" : ""}}>About Me</Button>
            <Button onClick={() => handleExperience()} backgroundColor={Exp ? "red.500" : ""} color={Exp ? "white" : ""} _hover={{backgroundColor:Exp ? "red.500" : ""}} >Professional Experience</Button>
          </HStack>
          {About && <UnorderedList fontSize={'18px'} align={'left'} fontWeight={400} lineHeight={1.8}>
            <Text id="first">My name is <b>Rohini Kushwaha</b>. I'm a Full Stack Web Developer based in Uttar Pradesh, India. I am a B.tech graduate
              and completed my graduation from Dr. A.P.J Abdul Kalam Technical university, Lucknow in Electrical Engineering trade.I have also cleared GATE (Graduate aptitude test of engineering) examination in 2019 & 2020.
            </Text>
            <Text>I have a keen interest and a love in exploring new technologies in the field of Web Development and always try to adapt to them.
              I believe in the concept of continuous learning by regularly
              upgrading my skills and enhancing my knowledge.
            </Text>
            <Text id="last2">
              I have learnt MERN stack, data structures,
              algorithms and I am also successful at collaborating with teams to
              deliver attractive and engaging results.
            </Text>
            <Text id="looking">
              Looking for a challenging role in industry
              to utilize my skills and learn.
            </Text>

          </UnorderedList>}
          {Exp && <UnorderedList fontSize={'18px'} align={'left'} fontWeight={400} lineHeight={1.8}>
              <Text>Working as a Junior Software Developer at <a href="https://digitup.in/" target='_blank' rel="noreferrer" style={{textDecoration:"underline"}}>DigitUp Solutions Pvt. Ltd.</a>, Gurgaon. <b>(June/2023 - Present)</b></Text>
              <Text>Worked as a Graduate Apprentice Trainee at Bharat Petroleum Corporation of India Ltd., Noida <b>(2020 - 2021)</b></Text>
            </UnorderedList>
          }

        </Stack>
      </Stack>
    </Container>
  );
}