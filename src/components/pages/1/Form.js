import React from 'react';
import { TextField
    ,   FormLabel, FormControl, FormHelperText,  Typography, Stack } from "@mui/material";


const Form = ({state, nameErr, phoneErr , emailErr, handleChange}) => {
  return (
    <div> 
        <FormControl 
        
        sx={{marginBottom: 2}}
        fullWidth>
        <Stack 
        justifyContent={"space-between"}
        flexDirection={"row"}>
            <FormLabel
        htmlFor='name'
        >
            Name
        </FormLabel>
        <FormHelperText 
        error
        >
           {nameErr}
        </FormHelperText>

        </Stack>
    <TextField
    variant="outlined"
    color={ nameErr? "error" :""} 
    focused = {nameErr ? true : undefined}
    id='name'
    value={state.name}
    onChange={(e)=>handleChange(e)}
    name ="name"
    placeholder='e.g. Stephen King' />

</FormControl>


<FormControl
 sx={{marginBottom: 2}}
fullWidth>
 <Stack 
 justifyContent={"space-between"}
 flexDirection={"row"}>
    
    <FormLabel 
    htmlFor='email'
    >
        Email
    </FormLabel>

    <FormHelperText
     error>
        {emailErr}
    </FormHelperText>
 </Stack>

    <TextField
    id="email"
    variant="outlined" 
    color={ emailErr? "error" :""} 
    focused = {emailErr ? true : undefined}
    name='email'
    value={state.email}
    onChange={(e)=>handleChange(e)}
    placeholder='e.g. stephenking@gmail.com' />

</FormControl>


<FormControl 
 sx={{marginBottom: 2}}
fullWidth>
    <Stack 
        justifyContent={"space-between"}
        flexDirection={"row"}>
     <FormLabel
         htmlFor='phone'
    >
    Phone
    </FormLabel>
    <FormHelperText
    error
    >
        {phoneErr}
    </FormHelperText>

    </Stack>

    <TextField
    id="phone"
    variant="outlined"
     color={ phoneErr? "error" :""} 
    focused = {phoneErr ? true : undefined}
    name='phone'
    value={state.phone}
    onChange={(e)=>handleChange(e)}
    placeholder='e.g. +1 234 567 890' />

</FormControl>


    </div>
  )
}

export default Form