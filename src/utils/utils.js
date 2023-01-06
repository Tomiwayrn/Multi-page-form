export const monthlyVals ={
    "Arcade": 9,
    "Advanced": 12,
    "Pro": 15,
    "online": 1,
    "larger": 2,
    "customize": 2
};

export const yearlyVals ={
    "Arcade": 90,
    "Advanced": 120,
    "Pro": 160,
    "online": 10,
    "larger": 20,
    "customize": 20
};

export const names ={
    "online": "Access to miltiple games",
    "larger": "Extra 1TB of cloud save",
    "customize": "Custom theme on your profile"
};

export const checker1 =(  state)=>{
    const bool ={
        name: state.name ? true : false,
        email: state.email ? true : false,
        phone: state.phone ? true : false
    }

    return bool


}

export const ValidateEmail =(input)=> {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
     
  
      return true;
  
    } else {
  
  
      return false;
  
    }
  
  };