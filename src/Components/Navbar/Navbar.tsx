import React from "react"
import classes from './Navbar.module.css'
import {FaSistrix} from 'react-icons/fa'
import userPic from '../../assets/images/masood.jpeg'
import flag from '../../assets/images/flag.png'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div><FaSistrix/></div>
            <div className={classes.userInfo}>
                <img src={flag} alt="IranFlag"className={classes.flag}/>
                <img src={userPic} alt="userPic" className={classes.UserPic}/>
            </div>
        </div>
    )
}

export default Navbar
