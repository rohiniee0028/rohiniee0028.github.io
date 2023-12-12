import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const connect = [
    {
        name: "LinkedIn",
        img: "https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png",
        link: "https://www.linkedin.com/in/rohini-kushwaha-735b9322b/",
        color: 'blue.500'
    },
    {
        name: "GitHub",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU",
        link: "https://github.com/rohiniee0028",
        color: 'gray.700'
    },
    {
        name: "Gmail",
        img: "https://i.pinimg.com/originals/29/42/ad/2942ad3a9c3e0a074ff4e94ea289ee31.jpg",
        link: "mailto:rohini19394@gmail.com",
        color: 'red.500'
    },
]

export const Contact = () => {
    return (
        <Box width={'90%'} margin={'auto'} marginTop={'70px'} id="contact">
            <Heading fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }} style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "80px" }}>...Feel <Text color="red.500">Free</Text>To<Text color="red.500">Connect... </Text></Heading>
            <Box display={'flex'} flexDirection={{ base: "column", md: "row" }} gap={'30px'} justifyContent={'center'} marginTop={'-20px'}>
                <Box width={{ base: "100%", md: "50%", lg: "50%" }} borderRadius={"20px"}>
                    <Image src="image/new_mail.png" width={'100%'} borderRadius={"20px"}  />
                </Box>
                {/* https://cdn.writermag.com/2020/01/shutterstock_1288206052_web.jpg */}
                <Box width={{ base: "100%", md: "40%", lg: "40%" }}>
                    <Flex justifyContent={{ base: "center", sm: "center", md: "center", lg: "left" }} >
                        <Image src="https://media.tenor.com/6ph1w40DrykAAAAi/handshake-joypixels.gif" width={{ base: "100px", lg: "200px" }} />
                    </Flex>
                    <Text align={{ base: "center", sm: "center", lg: "left" }} fontSize={'18px'}>Feel free to get in touch with me.
                        I am always open to discussing new ideas or oppurtunities
                        and to be a part of your visions.
                        <br />
                        <br />
                        Need help?
                    </Text>
                    <br />
                    <Box display={'flex'} gap={'20px'} flexDir={{base:"row",sm:"row",md:"row",lg:"row"}} justifyContent={{base:"center",sm:"center",md:"left",lg:"left"}}>
                        {
                            connect.map((el) => (
                                <a href={el.link} target="_blank">
                                    <Button display={'flex'} gap={'10px'} bg={el.color} color={'white'} _hover={{ bg: el.color }}>
                                        <Image src={el.img} width="20px" style={{ borderRadius: '20px' }} />
                                        <Text lineHeight={1.5}>{el.name}</Text>
                                    </Button>
                                </a>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}