import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const About = () => {
    const {textColor} = useContext(ThemeContext)

    return(
        <>
            <div className='About'>
                <div className='aboutData'> 
                    <p className='aboutTitle'>📰 Welcome to Newsly,</p>
                    <p style={{color: textColor}}><b>your one-stop destination for the latest news across the United States!</b></p>

                    <p style={{color: textColor}}> This app brings you real-time headlines from a wide range of categories including: <br />
                    🗞️ General | 💼 Business | 🎬 Entertainment | 🏥 Health | 🔬 Science | ⚽ Sports | 💻 Technology</p>

                    <p style={{color: textColor}}> Built with ⚛️ React, Newsly is designed to provide a clean, responsive, and intuitive experience. You can easily switch between light and dark mode, explore different categories, and stay updated with just a click..</p>

                    <p className='aboutTitle'>Stay informed. Stay connected. Stay ahead. 🚀</p> </div>
            </div>
        </>
    )
}