import { Box, Heading, Text } from "@chakra-ui/react"

export const GithubStats = () => {
    return (
        <Box style={{ marginTop: "80px" }}>
            <Heading fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }} style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "50px" }}>...My<Text color="red.500">GitHub Stats...</Text></Heading>
            <br />
            <Box width={{ base: "90%", sm: "90%", xs: "98%", md: "80%", lg: "80%" }} gap={"20px"} margin={"auto"} display={"flex"} flexDirection={"column"}>
                <Box margin={"auto"} display={"flex"} gap={"40px"} justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}>
                    <Box marginTop={"-20px"}>
                        <p align="left">&nbsp;<img src="https://github-readme-stats.vercel.app/api?username=rohiniee0028&&&theme=tokyonight" alt="rohiniee0028" /></p>
                    </Box>
                    <Box >
                        <a href="https://github.com/rohiniee0028/github-readme-streak-stats">
                            <p align="left"><img src="https://github-readme-streak-stats.herokuapp.com/?user=rohiniee0028&&&theme=tokyonight" alt="rohiniee0028" /></p>
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}