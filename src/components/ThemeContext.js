import { createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [BgColor, setBgColor] = useState('white');
    const [textColor, settextColor] = useState('black');

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(()=> {
        darkMode? setBgColor('black') : setBgColor('white') ;
        darkMode? settextColor('white') : settextColor('black')  
    }, [darkMode])

    return(
        <ThemeContext.Provider value={{darkMode, BgColor, textColor, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}