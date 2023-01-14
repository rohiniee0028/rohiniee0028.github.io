import { Box, Heading, Text } from "@chakra-ui/react"

export const GithubStats = () => {
    return (
        <Box style={{ marginTop: "80px" }}>
            <Heading fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }} style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "50px" }}>...My<Text color="red.500">GitHub Stats...</Text></Heading>
            <br />
            <Box width={{ base: "90%", sm: "90%", xs: "98%", md: "90%", lg: "90%" }} gap={"20px"} margin={"auto"} display={"flex"} flexDirection={"column"}>
                <Box margin={"auto"} display={"flex"} gap={"40px"} justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}>
                    <Box marginTop={"-20px"}>
                        <p align="left">&nbsp;<img src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=rohiniee0028&theme=2077&utcOffset=8" alt="rohiniee0028" /></p>
                    </Box>
                    <Box >
                        <p align="left"><img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=rohiniee0028&theme=2077" alt="rohiniee0028" /></p>
                    </Box>
                    <Box >
                        <p align="left"><img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=rohiniee0028&theme=2077" alt="rohiniee0028" /></p>
                    </Box>
                </Box>
                <Box margin={"auto"} display={"flex"} gap={"40px"} justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}>
                    <Box marginTop={"-20px"}>
                        <p align="left">&nbsp;<img src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=rohiniee0028&theme=2077" alt="rohiniee0028" /></p>
                    </Box>
                    <Box >
                        <p align="left"><img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=rohiniee0028&theme=2077" alt="rohiniee0028" /></p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}