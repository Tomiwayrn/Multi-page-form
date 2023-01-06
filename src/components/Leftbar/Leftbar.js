import React from 'react';
import "./Leftbar.css";
import {  Stack  } from "@mui/material"
import LeftButton from './LeftButton';

const Leftbar = ({setPage, page}) => {



  return (
    <Stack
  
    className = "leftbar"
    flex={2}
    alignItems={"center"}
    justifyContent={"center"}
    sx ={{
      minHeight: {sm: "520px", xs : "140px"}, 
      minWidth: {sm:"260px", xs: "120%"}, 
      transform: {sm: "translate(0%)", 
      xs:"translateX(-10%)"}}}
    >
     
    <Stack 
     sx={{flexDirection: {sm: "column", xs: 'row'},  gap: {md: 7, xs: 2 } }}
   
    
    >
      <LeftButton 
      setPage={setPage}
      page={page}
      num={1}
      info={"YOUR INFO"}
      />

      <LeftButton 
      setPage={setPage}
      page={page}
      num={2}
      info={"SELECT PLAN"}
      />

      <LeftButton 
      setPage={setPage}
      page={page}
      num={3}
      info={"ADD-ONS"}
      />

      <LeftButton 
      setPage={setPage}
      page={page}
      num={4}
      info={"SUMMARY"}
      />
    </Stack>
    </Stack>
  )
}

export default Leftbar