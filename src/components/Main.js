import React from 'react';
import { Box, Button } from "@mui/material";
import { SettingsContext } from '../utils/SettingsContext';
import Page1 from './pages/1/Page1';
import Page2 from './pages/2/Page2';
import Page3 from './pages/3/Page3';
import Page4 from './pages/4/Page4';
import Success from './pages/Success';

const Main = ({ page ,setPage } ) => {
    
  const { bool , message , setMessage, submit, setSubmit} = React.useContext(SettingsContext);
  
    const increment = ()=>{
          setPage(page +1)    
        }
    
        const decrement = ()=>{ 
              setPage(page - 1) 
        }
    
    
        const handleClick =(e)=>{
           
            switch (e.target.name){
                case ('plus'):
    
                if(
                   ( !bool.name && 
                    !bool.email && 
                    !bool.phone ) ||
                    bool.addOns === false
                    ){
                    setMessage({
                      ...message,
                      [page]: "Please Fill all Fields"
                    })
              
                    return;
                  }


                  else {increment()
                
                }
                 
                    break;
    
                case ('minus'):
                   
                   decrement()
                    
                     break;
    
                default:
                    return
              
            } };
    
  return (
    <Box
    flex={4}
    p={2}
    width={"100%"}
    position={"relative"}
    sx={{background: "white", 
    overflow: "hidden",transform: {sm: "translateY(0px)", xs: "translateY(-20px)"}, 
    paddingBottom: 10, 
    borderRadius: {sm: 0, xs: 3}, 
     boxShadow: {sm: "none" , xs:"0px 0px 20px rgba(201, 201, 201, .4)" }}}
    > 
    { !submit && 
    <Box>
        {
            page === 1 && <Page1 />
        }

        {
            page === 2 && <Page2 />
        }

        {
            page === 3 && <Page3 />
        }

        {
            page === 4 && <Page4 />
        }

    </Box>
     }

     {
        submit === true && <Success />
     }


    { submit === false &&
    <div>
        {
            page > 1 && 
            <Button
            className='back-btn'
            name="minus"
            onClick={(e)=> handleClick(e)}
            sx={{textTransform: "capitalize", color: "#818181"}}
                >
                            Go back
                       </Button>
        }

            
             {  page <4 && <Button
                name="plus"
                onClick={(e)=> handleClick(e)}
                className='next-btn'
                sx={{padding: "10px  20px", borderRadius: "7px"}}
                >
                    {"Next Step"}
                </Button>

             }

             {
                page=== 4 &&  <Button
                name="plus"
                className='next-btn'
                onClick={()=> setSubmit(true)}
                sx={{padding: "10px 20px", borderRadius: "7px"}}
                >
                   Confirm
                </Button>
        
             }
        
        </div>  
      }
        
    </Box>
  )
}

export default Main