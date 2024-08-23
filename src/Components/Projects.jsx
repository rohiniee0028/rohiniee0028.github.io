import { background, Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import "./styles/Projects.css";

let projects = [
    {
        image: "/image/rentify.jpg",
        projectName: "Rentomojo Clone",
        description: "India's leading rental platform brings to you a wide range of products on rent. Rento mojo is an online rental platform that provides furniture, appliances and electronics on a monthly rental basis.",
        skills: "MongoDB | Nodejs | Express | React | Redux | Redux-thunk | Chakra-UI | Rest-api | Jsonwebtoken ",
        netlifyLink: "https://rentify-khadsepranay.vercel.app/",
        githubLink: "https://github.com/rohiniee0028/Rentify.com"
    },
    {
        image: "/image/blog.png",
        projectName: "Blog App",
        description: "A simple blog application made individually in 4 days in which user can login/signup, create blog, read blog, search blog and also can connect with us by sending an email to us.",
        skills: "Next JS | MongoDB | Node JS | Chakra-UI | Redux | Jsonwebtoken",
        netlifyLink: "https://blog-application-lac.vercel.app/",
        githubLink: "https://github.com/rohiniee0028/blog-app-NextJS"
    },
    {
        image: "/image/revv.png",
        projectName: "REVV Clone ",
        description: "Revv cars is an Indian self-drive mobility start up.It is a popular choice for self-drive car rentals services and it also offers car subscription in India in over 22 cities.",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://velvety-cocada-174e41.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/Clone--REVV-Website"
    },
    {
        image: "/image/weather-img.jpg",
        projectName: "Weather App Clone ",
        description: "A weather forecasting web application built using weather API. It shows city and current location based weather data with next 5 hours and 7 days forecast.",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://ubiquitous-sable-b3c88a.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/weather-api"
    },
    {
        image: "/image/crud.png",
        projectName: "Todo App",
        description: "A simple Todo App made individually in 1 day in which we can do CRUD operations. Given functionalities like delete, toggle , update, post.",
        skills: "TypeScript | Redux | Redux-thunk | Vercel | Axios | Chakra-ui | Rest-Api",
        netlifyLink: "https://crud-app-ts.vercel.app/",
        githubLink: "https://github.com/rohiniee0028/redux-typescript-crud-app"
    },
    {
        image: "/image/sugar.png",
        projectName: "SUGAR Cosmetics Clone",
        description: "Sugar Cosmetics is an Indian e-commerce website focuses on selling makeup and skincare products that are millennial friendly, best suited for Indian skin tones and are cruelty-free.",
        skills: "HTML5 | CSS3 | JavaScript",
        netlifyLink: "https://taupe-pony-ad84a9.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/guttural-wood-1464"
    },
    {
        image: "/image/bluestone.png",
        projectName: "BlueStone Clone",
        description: "Bluestone is one of the e-Commerce Website.Best jewellery website for online jewellery shopping in India with Designer Rings, Pendants, Earrings, Mangalsutra, Bangles, Bracelets, Solitaire Diamonds..",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://bluestoneclone.netlify.app/",
        githubLink: "https://github.com/rohiniee0028/Bluestone-clone"
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