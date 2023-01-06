import React from 'react';
import { Box , Typography , Stack} from "@mui/material";

const Card = ({img , name, val ,state, setState,months}) => {
  
  
    return (
    <Stack
    className={state.plan === name? 'card active' : "card"}
    minWidth={120}
    onClick={()=>{
        setState({
            ...state, 
            plan: name
        })
    }}
    sx={{flexDirection: {sm: "column" , xs: "row"}, gap: 3}}
    >
      
            <img 
            style={{maxWidth: "60px"}}
            src={img} alt={name} />
     

        <Box>
        <Typography
        variant="h5">
            {name}
        </Typography>
        <Typography
        color={"GrayText"}
        >
            {val}
        </Typography>

       { months && <Typography
        color={"dark-blue"}
        >
            2 months free
        </Typography>
}
        </Box>
    </Stack>
  )
}

export default Card