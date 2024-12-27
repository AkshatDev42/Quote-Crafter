import { useContext,createContext, useState, ReactNode} from "react";

interface ThemeContextType
{
    dark: boolean,
    setDark: (isDark: boolean)=>void
}
const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

const ThemeProvider: React.FC<{children: ReactNode}> = ({children}): React.ReactElement =>{
    const [dark,setDark] = useState<boolean>(false);
    
    return <ThemeContext.Provider value={{dark,setDark}}>{children}</ThemeContext.Provider>
}

const useTheme = () =>{
    return useContext(ThemeContext)
}

export {ThemeProvider, useTheme}