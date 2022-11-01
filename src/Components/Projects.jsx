import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
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
        image: "https://www.afashionblog.com/wp-content/uploads/2021/11/Is_Mytheresa_A_Legitimate_Website_3.jpg",
        projectName: "MYTHERESA Clone",
        description: "Mytheresa is a German e-commerce luxury fashion website.It is an online shopping destination for children's, men's, and women's luxury fashion and lifestyle design.",
        skills: "HTML | CSS | JavaScript | React",
        netlifyLink: "",
        githubLink: "https://github.com/rohiniee0028/horrible-twist-9890"
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
        netlifyLink: "https://silly-queijadas-e172c2.netlify.app/",
        githubLink: "https://github.com/aakarsh604/Gearbest-Clone"
    },
]

export const Projects = () => {
    return (
        <div className="main-div" >
             <Heading style={{display:"flex", gap:"10px",justifyContent:"center",marginBottom:"80px" }}>My Recent <Text color="red.400">Projects</Text></Heading>
            <div style={{ width: "80%", margin: "auto" }}>

                {/* //  <div className="project-div">
                        //     <img src={el.image}/>
                        //     <h3>{el.projectName}</h3>
                        //     <Text>{el.description}</Text>
                        //     <Text>
                        //         <span style={{color:"tomato"}}>Tech Stack: </span>
                        //         {el.skills}
                        //     </Text>
                        //     <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        //          <Button><span><SiNetlify/></span> Live</Button>
                        //          <Button><span><BsGithub/></span> Code</Button>
                        //     </div>
                        //  </div> */}
                <SimpleGrid columns={[1, 1, 2, 3]} spacing='50px'>
                    {
                        projects.map((el) => (
                            <div height='auto' style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", padding:"20px", textAlign:"start"}}>
                                <Image src={el.image} height="250px" width="100%"/>
                                <p style={{fontSize:"20px", fontWeight:"500", lineHeight:"2.5", textAlign:"center"}}>{el.projectName}</p>
                                <p>{el.description}</p>
                                <p style={{marginTop:"10px"}}>
                                    <span style={{ color: "tomato", fontWeight:"bold" }}>Tech Stack: </span>
                                    {el.skills}
                                </p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"20px"}}>
                                    <a href={el.netlifyLink} target="_blank" rel="noopener noreferrer">
                                        <button style={{display:"flex", gap:"5px", alignItems:"center"}}><span style={{marginRight:"5px"}}><SiNetlify /></span> Live</button>
                                    </a>
                                    <a href={el.githubLink} target="_blank" rel="noopener noreferrer">
                                        <button style={{display:"flex", gap:"5px", alignItems:"center"}}><span style={{marginRight:"5px"}}><BsGithub /></span> Code</button>
                                    </a>
                                </div>
                            </div>
                        ))}
                </SimpleGrid>


            </div>
        </div>
    )
}