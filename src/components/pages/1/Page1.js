import React from 'react';
import Form from "./Form"
import {  Box,   Typography,  } from "@mui/material";
import { SettingsContext } from '../../../utils/SettingsContext';
import { checker1 } from '../../../utils/utils';

const Page1 = () => {
    const {state , setState, bool , setBool, message , setMessage } = React.useContext(SettingsContext);
     
    const [ nameErr , setNameErr] = React.useState("");
    const [ emailErr , setEmailErr] = React.useState("");
    const [ phoneErr , setPhoneErr] = React.useState("");

    
    const handleChange =(e)=>{
   
       
        const { name, value } = e.target 
        
        if(bool.name && bool.phone && bool.email){
            setMessage("");
        }

       

      setState({
        ...state,
        [name]: value
      })
      
    
    }

    React.useEffect(()=>{
        setBool(checker1(state))
        if(message[1]){
        setNameErr(bool.name ?"" :"This field is required");
        setEmailErr(bool.email ? "" : "This field is required");
        setPhoneErr(bool.phone ? "" : "This field is required");
        }
    }, [state, message[1]])
   
  return (
    <Box
    className="page"
    maxWidth={"440px"}
    >
        <Box>
            <Typography
            fontWeight={600}
            variant= "h4"
            >
                Personal info
            </Typography>
            <Typography
            p={1}
            color={"GrayText"}
            >
                Please provide your name, email address and phone number. 
            </Typography>

            {
                message[1]  && <Typography
                p={1}
                color={"error"}
                >
                  {message[1]}   
                </Typography>
            }
        </Box>
        <Form 
        state={state}
        handleChange={handleChange}
        nameErr ={nameErr}
        emailErr ={emailErr}
        phoneErr = {phoneErr}
        />
            

    </Box>
  )
}

export default Page1