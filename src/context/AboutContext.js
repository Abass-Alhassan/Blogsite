import {createContext} from 'react'

export const AboutContext= createContext();

function AboutContextProvider({children}){
    const about={
        name:"Abass Alhassan",
        hobbies:["listening to music", "reading"],
        bio:"I am a passionate young man who desires community growth"
    }
    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}


export default AboutContextProvider