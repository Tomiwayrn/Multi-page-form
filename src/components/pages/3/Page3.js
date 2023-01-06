
import React from 'react';
import { Box , Typography , Checkbox, Stack} from "@mui/material"
import "./Page3.css";
import { SettingsContext } from '../../../utils/SettingsContext';

const Item = ({val, title, sub, name, state , setState,})=>{

  const handleChange =(e)=>{    
   
  
        if(state.addOns.includes(name)){
          const filterArr = state.addOns.filter((item)=>{
           if(!item === name){
            return item
           }
          })

          setState({
            ...state,
            addOns: filterArr
          })
          
       
        }
        else{
          setState({
            ...state,
            addOns:[ ...state.addOns, name]
          })
        }

        console.log(state.addOns)
    }

  return(
   

    <Stack
    
    onClick={(e)=> handleChange(e) }
    flexDirection={"row"}
    alignItems={"center"}
    gap={1}
    className ={state.addOns.includes(name)? "pick-container active": "pick-container"}
   
    >
      <Checkbox 
      checked = {
        state.addOns.includes(name)? true : false
      }
      />
      <Stack
    
      >
        <Typography
        fontWeight={"600"}
        >
          {title}
        </Typography>
        <Typography
        color={"GrayText"}
        sx={{fontSize: "13px"}}
        >
          {sub}
        </Typography>
       
      </Stack>
      <Typography
      color={"hsl(243, 100%, 62%)"}
      fontWeight={"700"}
       className='val'
        >
          {val}
        </Typography>
      </Stack>

  )
}
const Page3 = () => {
  const {state , setState, setBool, bool } = React.useContext(SettingsContext);

React.useEffect(()=>{
  setBool({...bool, addOns: state.addOns.length > 0 ?  true : false})
}, [state.addOns])
  return (
    <Box
    className='page'
    p={1}
    >
      <Box
      >
        <Typography
        fontWeight={600}
        variant= "h4">
          Pick add-ons
        </Typography>
        <Typography 
        variant='h6'>
          Add-ons help enhance your gaming experience.
        </Typography>

        
        {
              bool.addOns === false  && <Typography
                p={1}
                color={"error"}
                >
                  Please select at least one option  
                </Typography>
            }
      </Box>

      <Stack
      gap={3}>
       <Item 
       state={state}
       setState={setState}
       val={ state.mode === "monthly" ? "+$1/mo" : "+$10/yr"}
       title={"Online service"}
       sub={"Access to multiple games"}
       name={"online"}
       />

       <Item 
         state={state}
         setState={setState}  
       val={ state.mode === "monthly" ? "+$2/mo" : "+$20/yr"}
       title={"Larger storage"}
       sub={"Extra 1TB of cloud save"}
       name={"larger"}
       />

       <Item 
         state={state}
         setState={setState}  
       val={ state.mode === "monthly" ? "+$2/mo" : "+$20/yr"}
       title={"Customizable Profile"}
       sub={"Custom theme on your profile"}
       name={"customize"}
       />


       
        </Stack>
      
    </Box>
  )
}

export default Page3