import React from 'react';
import { Stack , Typography} from '@mui/material';
import { SettingsContext } from '../../../utils/SettingsContext'

const Switch = () => {
  const { state , setState } = React.useContext(SettingsContext);
  const {mode} = state
  
  return (
    <Stack
    alignItems={"center"}
    flexDirection={"row"}
    justifyContent={"space-around"}
     sx={{marginTop: 4, background: "hsl(217, 100%, 97%)", p: 1, borderRadius: 2}}
    >
      <Typography>
        Monthly
      </Typography>
    <div  
      onClick={()=> mode === "monthly" ? setState({
        ...state, mode: "yearly"
      }): setState({
        ...state, mode: "monthly"
      }) }
     className = {
      mode === "monthly" 
      ?'custom-switch'
      : "custom-switch active"
    }
    >
    <Stack
    flexDirection={"row"}
    className = "switch-container" >
      
      <div  className = 'switch-thumb'>
      </div>
   
      </Stack>
  </div>

  <Typography>
        Yearly
      </Typography>
  </Stack>
  )
}

export default Switch