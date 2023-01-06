import React from 'react';
import "./Page4.css";
import { monthlyVals, yearlyVals, names } from '../../../utils/utils';
import { Stack , Typography, Box } from '@mui/material';
import { SettingsContext } from '../../../utils/SettingsContext';

const Page4 = () => {
  const {state,} = React.useContext(SettingsContext);
  const {plan, mode , addOns} = state;


  const [ total , setTotal ] = React.useState(0);

  React.useEffect(()=>{
    let monthvalue = 0
    let yearlyvalue = 0

    if(mode === "monthly"){
      monthvalue = monthlyVals[plan] + monthvalue ;
      
      addOns.forEach((item)=>{
        monthvalue = monthvalue + monthlyVals[item]
      })

      setTotal(monthvalue)
      
     
    }

    else{
      yearlyvalue = yearlyVals[plan] + yearlyvalue ;
      
      addOns.forEach((item)=>{
        yearlyvalue = yearlyvalue + yearlyVals[item]
      })

      setTotal(yearlyvalue)
      
    }
    
    
    
  }, [state])
  
  return (
    <Box
    p={3}
    className="page"
    >
      <Stack
     p={1}
      >
      <Typography 
      fontWeight={600}
      variant= "h4">
        Finishing up
      </Typography>
      <Typography>
        Double-check everything looks OK before confirming
      </Typography>
      </Stack>

      <Stack
      gap={2}
      className="arc-container"
      >
         
         <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
         sx={{flexDirection: "row", borderBottom: "1px solid hsl(229, 24%, 87%)", paddingBottom: 3}}
         >

          <Typography
  
          fontWeight={"600"}
          variant= "h6">
           {state.plan} ({state.mode})
          </Typography>

          <Typography
           sx={{fontWeight: "bold"}}
           color={"hsl(213, 96%, 18%)"}>
        ${mode === "monthly"? monthlyVals[plan] + "/mo"  : yearlyVals[plan] + "/yr"}
      </Typography>
         </Stack>

       { 
       state.addOns.length > 0 && 
       state.addOns.map((item, i)=>{
        return (
          <Stack
          key={i}
          alignItems={"center"}
          justifyContent={"space-between"}
        sx={{flexDirection: "row"}}
        >
         <Typography
          color={"GrayText"}
          fontSize={15}
         variant= "p">
       {names[item]}
     </Typography>
     <Typography
        fontWeight={"500"}
          color={"hsl(213, 96%, 18%)"}
         >
       ${mode === "monthly"? monthlyVals[item] + "/mo"  : yearlyVals[item] + "/yr"}
     </Typography>

        </Stack>
        )
       }) 
         
 }

         
       
      </Stack>

      
      <Stack
      p={2}
        alignItems={"center"}
        justifyContent={"space-between"}
         sx={{flexDirection: "row"}}
         >
           <Typography
           color={"GrayText"}
           fontSize={16}
          variant= "p">
        Total (per {state.mode === "monthly" ? "month" : "year"})
      </Typography>

      <Typography
            fontWeight={"600"}
            fontSize={20}
           color={"hsl(213, 96%, 18%)"}
          variant= "h6">
       {mode === "monthly" ? "$"+ total + "/mo" : "$"+total + "/yr"} 
      </Typography>

         </Stack>
    </Box>
  )
}

export default Page4