import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export const Navbar = () => {
    const [isHover, setHover] = useState(false) 
    const {darkMode,toggleTheme} = useContext(ThemeContext);
    const [modeColor, setModeColor] = useState('white')

    useEffect(()=> {
        if (darkMode){
            setModeColor('black')

        }
        else{
            setModeColor('white')
        }
    }, [darkMode])

    const buttonStyle = {
        backgroundColor:  isHover ? 'black' : 'red',
        color: isHover ? 'red' : 'white',
    }

    return(
        <>
            <nav className="Navbar" style={{backgroundColor:modeColor}}>
                <div className='Title'>NewSpere | 
                    <Link to="/">Home</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className='NavbarComponents'>
                    <button type='button' className='btn LoginButton' style={buttonStyle} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} onClick={toggleTheme}>
                        {darkMode ? 'Light Mode': 'Dark Mode'}
                    </button>
                </div>
            </nav>
        </>
    )
} 