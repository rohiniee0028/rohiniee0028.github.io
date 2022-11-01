import GitHubCalendar from 'react-github-calendar';
import React from "react";
import ReactTooltip from 'react-tooltip';
import { Heading } from '@chakra-ui/react';

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
        <div style={{margin: "auto", width:"80%", marginTop:"80px"}} >

            <Heading style={{lineHeight:"3.0", marginBottom:"50px"}}>My <span style={{color:"tomato"}}>Github Calendar</span></Heading>
            <GitHubCalendar 
               username="rohiniee0028"
               style={{margin : "auto"}} 
               transformData = {selectLastHalfYear}
               blockSize={25}
               fontSize={20} 
            />
            <ReactTooltip delayShow={20} />
        </div>
    )
}