import { Box, Heading, Text } from "@chakra-ui/react"

export const GithubStats = () => {
    return (
        <Box style={{ marginTop: "80px" }}>
            <Heading fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }} style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "50px" }}>...My<Text color="red.500">GitHub Stats...</Text></Heading>
            <br />
            {/* style={{display:"flex", justifyContent:"space-between",gap:"10px", height:"185px"}} */}
            {/* height={{lg:"220px",md:"220px",sm:"200px",xs:"200px"}} */}
            {/* width={{base:"50%", sm:"50%", xs:"50%", md:"80%",lg:"80%"}} */}
            {/* width={{base:"50%", sm:"50%", xs:"50%", md:"80%",lg:"90%"}} */}
            {/* width={{base:"100%", sm:"100%", xs:"100%", md:"100%",lg:"80%"}} */}
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
                {/* <Box style={{ width:"35%", margin: "auto", marginTop: "10px" }} width={{ base: "90%", sm: "90%", xs: "98%", md: "80%", lg: "80%" }}>
                    <p><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohiniee0028&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=tokyonight" alt="rohiniee0028" width="100%" /></p>
                </Box> */}
            </Box>

            {/* <br />
            <Box style={{ width: "80%", margin: "auto" }} >
                <a href="https://github.com/rohiniee0028/github-readme-activity-graph"><img alt="rohiniee0028's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=rohiniee0028&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" /></a>
            </Box> */}
        </Box>
    )
}