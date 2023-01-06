import React, { createContext } from 'react'

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
    const [ state ,setState ] = React.useState({
        name: "",
        email: "",
        phone: "",
        plan: "Arcade",
        addOns: ["online", "larger"],
        mode: "monthly",

      });

      const [bool , setBool ] = React.useState({
        name: false,
        email: false,
        phone: false,
        plan: false,
        addOns: false
      });

      const [message , setMessage ] = React.useState({
        1:"",
      })

      const [ submit , setSubmit] = React.useState(false);

  return (
    <SettingsContext.Provider 
    value={{
      state,
      setState,
      message, 
      setBool,
      bool,
      setMessage,
      submit,
      setSubmit
        }}>
       {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider;