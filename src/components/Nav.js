import React, { Component } from 'react';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoWordpress } from "react-icons/io";
import { Link } from 'react-router-dom'
import '../assets/firstpage.scss'

class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md bg-dark navbar-dark" style={{width:'100%', background:'linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)' }}>
                <Link class="navbar-brand" to="/" style={{color:'white'}}>USMAN</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav" style={{margin:'auto'}}>
                        <li class="nav-item">
                            <Link to="/resume" class="nav-link" style={{color:'white'}}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/#projects" class="nav-link" style={{color:'white'}}>Projects</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav" style={{marginRight:'20px'}}>
                        <li class="nav-item">
                            <a href='https://www.linkedin.com/in/usman-ali-a46b7611b/' target="_blank"><IoLogoLinkedin color='white' /></a>
                        </li>
                        <li class="nav-item">
                            <a href='https://www.facebook.com/people/%C3%84li-%C3%96sm%C3%A4n/100011223306550' target="_blank"><IoLogoFacebook color='white' /></a>
                        </li>
                        <li class="nav-item">
                            <a href='https://usmanaliweb.wordpress.com/' target="_blank"><IoLogoWordpress color='white' /></a>
                        </li>
                    </ul>
                </div>
            </nav>


            // <div className='head'>
            //      <div className='lft'><Link to="/" style={ { color: 'aqua', letterSpacing: '4px', fontSize: '29px' } }>USMAN</Link></div>
            //     <div className='cent'>
            //         <ul>
            //             <li><Link to="/resume">About</Link></li>
            //             <li><Link to="/">Projects</Link></li>
            //             <li>Photography</li>
            //             <li>Videos</li>
            //         </ul>
            //     </div>
            //     <div className='rite'>
            //         <ul>
            //             <li><a href='https://www.linkedin.com/in/usman-ali-a46b7611b/' target="_blank"><IoLogoLinkedin color='white' /></a></li>
            //             <li><a href='https://www.facebook.com/people/%C3%84li-%C3%96sm%C3%A4n/100011223306550' target="_blank"><IoLogoFacebook color='white' /></a></li>
            //             <li><a href='https://usmanaliweb.wordpress.com/' target="_blank"><IoLogoWordpress color='white' /></a></li>
            //         </ul>
            //     </div> 
            // </div>
        )
    }
}

export default Nav;