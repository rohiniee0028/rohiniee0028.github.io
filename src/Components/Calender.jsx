import GitHubCalendar from 'react-github-calendar';
import React from "react";
import ReactTooltip from 'react-tooltip';
import { Box, Heading, Text } from '@chakra-ui/react';

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  
  

export const Calender = () => {

    return (
        <Box width={{ lg: "90%", md: "90%", sm: "80%", xs: "80%" }}  fontSize={{lg:"55px",md:"55px",sm:"55px",xs:"50px"}} margin="auto" marginTop={"-50px"}>
            <Heading style={{display:"flex", gap:"10px",justifyContent:"center",marginBottom:"80px" }}>My<Text color="red.500">Github Calendar</Text></Heading>
            <GitHubCalendar 
               username="rohiniee0028"
               transformData={selectLastHalfYear}
               style={{margin : "auto",color:"white", fontWeight: "bold", backgroundColor:"black", padding:"25px"}} 
               blockSize={22}
               fontSize={20} 
            >
            <ReactTooltip delayShow={20} html />
            </GitHubCalendar>
        </Box>
    )
}