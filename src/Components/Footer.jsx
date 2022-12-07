import { Box, Text } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";

export const Footer = () => {
    return (
        <Box marginTop={'60px'} padding={'20px'}display={"flex"} flexDir={{sm:"column", lg:"row", md:"row"}} alignItems={"center"} gap={"10px"} justifyContent={"center"}>
            <span><BsFillHeartFill color={"red"}/></span>
            <Text>Designed and build by <b>Rohini Kushwaha</b> , 2022 All rights reserved.</Text>
            <span><BsFillHeartFill color={"red"}/></span>
        </Box>
    )
}