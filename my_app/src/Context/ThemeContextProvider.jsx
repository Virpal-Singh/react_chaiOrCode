import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({children}){

    const [DarkThemeMode,setTheme]=useState(false)
    return(
        <ThemeContext.Provider value={{DarkThemeMode,setTheme }}> 
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider