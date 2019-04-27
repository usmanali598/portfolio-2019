import React, { Component } from 'react';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoWordpress } from "react-icons/io";
import { Link } from 'react-router-dom'
import '../assets/firstpage.scss'

class Nav extends Component
{
    render()
    {
        return (
            <div className='head'>
                <div className='lft'><Link to="/" style={ { color: 'aqua', letterSpacing: '4px', fontSize: '29px' } }>USMAN</Link></div>
                <div className='cent'>
                    <ul>
                        <li><Link to="/resume">About</Link></li>
                        <li><Link to="/">Projects</Link></li>
                        <li>Photography</li>
                        <li>Videos</li>
                    </ul>
                </div>
                <div className='rite'>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/usman-ali-a46b7611b/' target="_blank"><IoLogoLinkedin color='white' /></a></li>
                        <li><a href='https://www.facebook.com/people/%C3%84li-%C3%96sm%C3%A4n/100011223306550' target="_blank"><IoLogoFacebook color='white' /></a></li>
                        <li><a href='https://usmanaliweb.wordpress.com/' target="_blank"><IoLogoWordpress color='white' /></a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Nav;