import React from 'react';
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';

import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export default function SendMail() {
  const toast = useToast();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("mail")

    emailjs.sendForm('service_ztr51t1', 'template_206epqe', form.current, 'fx2CKE-tde2TgeDso')
      .then((result) => {
        toast({
          title: 'Email sent',
          description: 'Your message sent successfully. I will connect you soon.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }



  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      mt={"50px"}
      align="center"
      justify="center"
      id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 10 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
             fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }}
             >
              <Flex gap={"10px"}>
                ...Let's
                <Text color="red.500">Chat... </Text>
              </Flex>
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5} >
                  <form ref={form} onSubmit={sendEmail}>
                    <FormControl isRequired width={{ base: "200px", sm: "280px", md: "400px", lg: "400px" }}>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input type="text" name="to_name" placeholder="Your Name" />
                      </InputGroup>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="from_name"

                          placeholder="Your Email"

                        />
                      </InputGroup>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        resize="none"
                      />

                    </FormControl>
                    <br />
                    <Button type='submit'
                      colorScheme="blue"
                      bg="red.500"
                      color="white"
                      _hover={{
                        bg: 'red.500',
                      }}
                      isFullWidth>
                      Send Message
                    </Button>
                  </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}