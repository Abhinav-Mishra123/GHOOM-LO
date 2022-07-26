import React, { useContext } from 'react'
import "./Topactivity.css"
import iceskating from "../../assets/activity/iceskating.jpg"
import trekking from "../../assets/activity/trekking.jpg"
import rafting from "../../assets/activity/rafting.jpg"
import mountainbiking from "../../assets/activity/mountainbiking.jpg"
import foresttour from "../../assets/activity/foresttour.jpg"
import skiing from "../../assets/activity/skiing.jpg"
import jetlevflyer from "../../assets/activity/jetlevflyer.jpg"
import Scubadiving from "../../assets/activity/Scubadiving.jpg"
import { ThemeContext } from '../../components/context'

const Topactivity = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode; 
  return (
    <>
        <section id='topactivity' className='my-4'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center my-5'>Top Activity</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={iceskating} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>Ice Skating</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 1980 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={trekking} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>Trekking</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 2000 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={rafting} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>River Rafting</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 2499 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={mountainbiking} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>Mountain Biking</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 4999 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row my-4'>
                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={foresttour} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>Dark Forest Tour</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 3800 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={skiing} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>skiing</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 1500 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={jetlevflyer} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>Jetlev Flyer</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 3500 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12 col-lg-3 col-xs-12'>
                        <div className='activity-container' style={{backgroundColor: darkMode && "#000"}}>
                            <div className='act-img-container'>
                                <img src={Scubadiving} alt="Ice Skating"></img>
                            </div>
                            <div className='deatils'>
                            <div className='Name'>
                                <p>Scuba Diving</p>
                            </div>
                                <div className='price'>
                                    <p>&#x20b9; 2000 <small>/-</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Topactivity