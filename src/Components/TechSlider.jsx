import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/TechSlider.css";

const skills = [
  {
    id: 1,
    image: "https://www.computerhope.com/jargon/j/javascript.png",
    heading: "Javascript"
  },
  {
    id: 2,
    image: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw",
    heading: "HTML"
  },
  {
    id: 3,
    image: "https://static.javatpoint.com/csspages/images/css-tutorial.png",
    heading: "CSS"
  },
  {
    id: 4,
    image: "https://miro.medium.com/max/1400/0*EitUXT-pqbaQSCTt.gif",
    heading: "React"
  },
  {
    id: 5,
    image: "https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png",
    heading: "Chakra-UI"
  },
  {
    id: 6,
    image: "https://www.nicepng.com/png/detail/383-3839776_node-js-icon-png.png",
    heading: "NodeJS"
  },
  {
    id: 7,
    image: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
    heading: "MongoDB"
  },
  {
    id: 8,
    image: "https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG",
    heading: "Postman"
  },
  {
    id: 9,
    image: "https://cms-assets.tutsplus.com/uploads/users/34/posts/29738/preview_image/nodejs-expressjs.jpg",
    heading: "ExpressJS"
  },
  {
    id: 10,
    image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",
    heading: "Redux"
  }
]

const Slides = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <div style={{width:"90%", margin:"auto", marginTop:"120px"}} id="skills">
      <Heading style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "50px" }}>My<Text color="red.500">Technical Skills</Text></Heading>
      <Slider {...settings}>
        {
          skills.map((el) => (
            <Box  key={el.id} h={"100px"} backgroundColor={"transparent"} alignItems={"center"} margin={"auto"} marginTop={"50px"}>
              <Box style={{width:"100%", height:"100%", margin:"auto"}}>
                <Image src={el.image} alt={el.heading} style={{width:"120px", height:"120px", objectFit:"cover", borderRadius:"10%"}}/>
              </Box>
              <Box m={"auto"} mt={"15%"} textAlign={"center"}>
                <Text fontWeight={"bold"} marginRight={{base: "80px", md:"100px", sm:"100px", lg:"80px"}}>{el.heading}</Text>
              </Box>
            </Box>
          ))
        }
      </Slider>

    </div>
  );
}


export default Slides


