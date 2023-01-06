import React from 'react';
import Card from "./Card";
import "./Page2.css";
import Switch from './Switch';
import arc from "../../../assets/images/icon-arcade.svg";
import pro from "../../../assets/images/icon-pro.svg";
import ad from "../../../assets/images/icon-advanced.svg";
import { Box ,  Typography, Stack,} from "@mui/material";
import { SettingsContext } from '../../../utils/SettingsContext';

const Page2 = () => {
  const {state , setState} = React.useContext(SettingsContext);
  
  return (
    <Box
    className="page"

    >
         <Box>
            <Typography
            fontWeight={600}
            variant= "h4"
            >
                Select your plan
            </Typography>
            <Typography
            p={1}
            color={"GrayText"}
            >
               You have the option of monthly or yearly billing. 
            </Typography>

            <Stack
            gap={4}
            sx={{flexDirection: { sm: "row ", xs: "column"}}}
            >
            <Card 
            state ={state}
            setState ={setState}
            img = {arc}
            name = "Arcade"
            months={state.mode === "monthly"? false : true}
            val={ state.mode === "monthly" ? "$9/mo" : "$90/yr"}
            />
             <Card
             state ={state} 
             setState ={setState}
            img = {ad}
            name = "Advanced"
            months={state.mode === "monthly"? false : true}
            val={ state.mode === "monthly" ? "$12/mo" : "$120/yr"}
            />
             <Card 
             state ={state} 
            setState ={setState}
            img = {pro}
            val={ state.mode === "monthly" ? "$15/mo" : "$160/yr"}
            name = "Pro"
            months={state.mode === "monthly"? false : true}
            />

          </Stack>

          <Switch />

        </Box>
    </Box>
  )
}

export default Page2