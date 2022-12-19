import { background, Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import "./styles/Projects.css";

let projects = [
    {
        image: "https://carsubscriptions.org/screenshots/revv-open-screenshot-id10-1024x768.jpg",
        projectName: "REVV Clone ",
        description: "Revv cars is an Indian self-drive mobility start up.It is a popular choice for self-drive car rentals services and it also offers car subscription in India in over 22 cities.",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://velvety-cocada-174e41.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/Clone--REVV-Website"
    },
    {
        image: "https://cdn2.vectorstock.com/i/1000x1000/39/81/weather-forecast-poster-vector-31053981.jpg",
        projectName: "Weather App Clone ",
        description: "A weather forecasting web application built using weather API. It shows city and current location based weather data with next 5 hours and 7 days forecast.",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://ubiquitous-sable-b3c88a.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/weather-api"
    },
    {
        image: "https://www.ecomkeeda.com/wp-content/uploads/2021/01/1.-Bluestone-min-1024x536.png",
        projectName: "BlueStone Clone",
        description: "Bluestone is one of the e-Commerce Website.Best jewellery website for online jewellery shopping in India with Designer Rings, Pendants, Earrings, Mangalsutra, Bangles, Bracelets, Solitaire Diamonds..",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://bluestoneclone.netlify.app/",
        githubLink: "https://github.com/purimetlamuralikrishna/Bluestone-clone"
    },
    {
        image: "/image/rentify.jpg",
        projectName: "Rentomojo Clone",
        description: "India's leading rental platform brings to you a wide range of products on rent. Rento mojo is an online rental platform that provides furniture, appliances and electronics on a monthly rental basis.",
        skills: "React | Redux | Redux-thunk | Nodejs | Chakra-UI | Rest-api",
        netlifyLink: "https://rentify-one.vercel.app/",
        githubLink: "https://github.com/khadsepranay/Rentify.com"
    },
    {
        image: "https://sugermint.com/wp-content/uploads/2022/10/Sugar-Cosmetics-A-Cult-Favorite-Makeup-Brand.jpg",
        projectName: "SUGAR Cosmetics Clone",
        description: "Sugar Cosmetics is an Indian e-commerce website focuses on selling makeup and skincare products that are millennial friendly, best suited for Indian skin tones and are cruelty-free.",
        skills: "HTML5 | CSS3 | JavaScript",
        netlifyLink: "https://taupe-pony-ad84a9.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/guttural-wood-1464"
    },
    {
        image: "https://cdn-conhm.nitrocdn.com/VBHIKJQwTIFWhLpYnMyCHsGkLxlKDUse/assets/static/optimized/rev-0b093e8/wp-content/uploads/2022/01/Gearbest-vs-AliExpress-1-1024x489.jpg",
        projectName: "Gearbest Clone",
        description: "A cloned web application of gearbest.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances, home-decor, and electronic gadgets.",
        skills: "HTML5 | CSS3 | JavaScript",
        netlifyLink: "https://calm-bavarois-2ce653.netlify.app/",
        githubLink: "https://github.com/aakarsh604/Gearbest-Clone"
    },
]

export const Projects = () => {
    return (
        <Box id="projects">
             <Heading fontSize={{ base: "22px",sm:"32px", md: "40px", lg: "48px" }} style={{display:"flex", gap:"10px",justifyContent:"center",marginBottom:"80px" }}>...My Recent <Text color="red.500">Projects...</Text></Heading>
            <div style={{ width: "90%", margin: "auto" }}>

                <SimpleGrid columns={[1, 1, 2, 3]} spacing='50px'>
                    {
                        projects.map((el) => (
                            <div height='auto' style={{borderRadius:"20px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", padding:"20px", textAlign:"start"}}>
                                <Image src={el.image} height="250px" width="100%" borderRadius={"15PX"}/>
                                <p style={{fontSize:"20px", fontWeight:"700", lineHeight:"2.5", textAlign:"center"}}>{el.projectName}</p>
                                <p>{el.description}</p>
                                <p style={{marginTop:"10px"}}>
                                    <span style={{ color: "red", fontWeight:"bold" }}>Tech Stacks: </span>
                                    {el.skills}
                                </p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"20px"}}>
                                    <a href={el.netlifyLink} target="_blank" rel="noopener noreferrer">
                                        <Button _hover={{bg:"red.500", color:"white"}} style={{ fontWeight:"bold", fontSize:"18px", cursor:"pointer",padding:"5px 12px",borderRadius:"15px",display:"flex", gap:"5px", alignItems:"center"}} ><span style={{marginRight:"5px"}}><SiNetlify /></span> Live</Button>
                                    </a>
                                    <a href={el.githubLink} target="_blank" rel="noopener noreferrer">
                                        <Button _hover={{bg:"red.500", color:"white"}} style={{fontWeight:"bold", fontSize:"18px", cursor:"pointer",padding:"5px 12px",borderRadius:"15px",display:"flex", gap:"5px", alignItems:"center"}} ><span style={{marginRight:"5px"}}><BsGithub /></span> Code</Button>
                                    </a>
                                </div>
                            </div>
                        ))}
                </SimpleGrid>


            </div>
        </Box>
    )
}