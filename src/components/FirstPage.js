import React, { Component } from 'react';
import { FaMailBulk, FaMobileAlt, FaBasketballBall, FaMapMarkerAlt, FaMotorcycle, FaCamera, FaLaptopCode, FaCheck } from 'react-icons/fa';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoWordpress } from "react-icons/io";
import Resume from './Resume';
import { Link } from 'react-router-dom'
import '../assets/firstpage.scss'

class FirstPage extends Component
{
    render()
    {
        return (
            <div className='container'>
                <div className='head'>
                    <div className='lft'>USMAN</div>
                    <div className='cent'>
                        <ul>
                            <li><Link to="/resume">About</Link></li>
                            <li><a href='#projects' >Projects</a></li>
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
                <div style={ { display: 'flex' } }>
                    <div className='coder'><p>&lt;CODER&gt;</p></div>
                    <div className='imag'></div>
                    <div className='signer'><p>D&euro;SIGN&euro;&reg;</p></div>
                </div>
                <div id='projects' style={ { display: 'flex' } }>

                    <div class="box">
                        <a href="https://usmanalinoticeboardapp.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img class="proj" src="http://www.vectordiary.com/special-effects/008-notice-board/notice-board-background.jpg" alt="" />
                        </a>
                        <p>Notes Board</p>
                        <p>React js</p>
                        <a href="https://github.com/usmanali598/NotesOnBoard" target="_blank">
                            <img class="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>

                    <div class="box">
                        <a href="https://usmanaliredditapi.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img class="proj" src="https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg" alt="" />
                        </a>
                        <p>Reddit Api</p>
                        <p>React js</p>
                        <a href="https://github.com/usmanali598/ReduxFetchRedditApi" target="_blank">
                            <img class="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>

                    <div class="box">
                        <a href="https://usmanalicodes.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img class="proj" src="https://www.sjpl.org/sites/default/files/images/1718/nyt.png" alt="" />
                        </a>
                        <p>New York Times</p>
                        <p>React js</p>
                        <a href="https://github.com/usmanali598/React-Redux-NyTimeTopStories" target="_blank">
                            <img class="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>


                </div>
            </div>
        )
    }
}

export default FirstPage;