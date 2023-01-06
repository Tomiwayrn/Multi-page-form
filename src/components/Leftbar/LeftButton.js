import React from 'react';
import { Stack , Typography} from '@mui/material';
import { SettingsContext } from '../../utils/SettingsContext';


const LeftButton = ({num, info, setPage, page}) => {

  const { bool , message , setMessage} = React.useContext(SettingsContext);
  
  const handleClick =()=>{
    if(
      ( !bool.name && 
        !bool.email && 
        !bool.phone) ||
        bool.addOns === false
      ){
      setMessage({
        ...message,
        [num]: "Please Fill all Fields"
      })

      return;
    }
 
    else {setPage(num)}
  };

  return (
      <Stack
      flexDirection={"row"}
      className={"button-num-container"}
      gap={3}
      onClick ={()=> handleClick()}
      >
        <button
      className={page === num ? "button-num active" : "button-num"}
     
      >
        {num}
      </button>
        <Stack
        sx={{display: {sm: "flex", xs: 'none'}}}
        gap={0.7}>
          <Typography 
          variant={"p"}
          color={"#dddddd"}>
            STEP {num}
          </Typography>
          <Typography 
          variant={"p"}
          color={"white"}>
            {info}
          </Typography>
        </Stack>
     
          
    </Stack>
  )
}

export default LeftButton;