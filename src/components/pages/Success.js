import React from 'react';
import thanks from "../../assets/images/icon-thank-you.svg";
import { Box , Stack, Typography} from '@mui/material';

const Success = () => {
  return (
    <Box
    minHeight={300}
    height={"100%"}
    > 
    <Stack
    justifyContent={"center"}
    alignItems={"center"}
    height={"100%"}
    sx={{transform:{sm: "translate(0%)",  xs:"translate(0%, 40%)"}}}
    >
        <img src={thanks} alt="thank you" />
        <Typography
            fontWeight={600}
            variant= "h4"
            >
        Thank you!
        </Typography>

        <Typography
        variant="p"
        >
            Thanks for confirming your subscription!
            We hope you have fun using our platfrom. If you ever need support,
            pleas feel free to emial us at support@loremgaming.com.
        </Typography>
    </Stack>
        
   </Box>
  )
};

export default Success;