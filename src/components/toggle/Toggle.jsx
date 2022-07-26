import React, { useContext } from 'react'
import "./toggle.css"
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"
import { ThemeContext } from '../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick =()=>{
        theme.dispatch({type: "TOGGLE"});
    }
  return (
    <>
        <div className='t'>
        <img src={sun} alt="sun" className='t-icon'></img>
        <img src={moon} alt="moon" className='t-icon'></img>
        <button className="t-button" onClick={handleClick} style={{left : theme.state.darkMode ? 0 :25, transitionDuration:"0.4s"}}></button>

        </div>
    </>
  )
}

export default Toggle