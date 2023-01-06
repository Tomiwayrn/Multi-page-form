import React from 'react';
import { Stack , Box } from "@mui/material";
import Leftbar from './components/Leftbar/Leftbar';
import Main from './components/Main';
import SettingsContextProvider from './utils/SettingsContext';


const App = () => {
  const [ page , setPage ] = React.useState(1);
 
  return (
    <SettingsContextProvider>  
        <Box 
    p ={2}
    
    className={"main-app"}
    m={2}
    >
      <Stack  
       sx={{flexDirection: {sm: "row", xs: "column"}, gap :{md: 10, sm: 0}}}>
        <Leftbar 
        setPage={setPage}
        page={page}
        />
        <Main
        setPage={setPage}
        page={page}
        />
      </Stack>
    </Box>
    </SettingsContextProvider>

  )
}

export default App