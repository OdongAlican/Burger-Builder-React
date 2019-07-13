import React from 'react';
import LogoImg from '../../assets/Images/127 burger-logo.png';
import classes from './Logo.css'


const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={LogoImg}/>
    </div>
)

export default logo;