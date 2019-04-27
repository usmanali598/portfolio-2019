import React, { Component } from 'react';
import { FaMailBulk, FaMobileAlt, FaBasketballBall, FaMapMarkerAlt, FaMotorcycle, FaCamera, FaLaptopCode, FaCheck } from 'react-icons/fa';
import { IoLogoLinkedin, IoLogoFacebook, IoLogoWordpress } from "react-icons/io";
import { TweenMax } from 'gsap';
import Resume from './Resume';
import Nav from './Nav';
import { Link } from 'react-router-dom'
import '../assets/firstpage.scss'

class FirstPage extends Component
{

    componentDidMount()
    {
        TweenMax.from( '.imag', 5, { opacity: 0, delay: 2 } )
    }
    render()
    {
        return (
            <div className='container'>
                <Nav />
                <div style={ { display: 'flex' } }>
                    <div className='coder'><p>&lt;CODER&gt;</p></div>
                    <div className='imaas'>
                        <div className='imag'></div>
                        <div className='imag2'></div>
                    </div>
                    <div className='signer'><p>D&euro;SIGN&euro;&reg;</p></div>
                </div>
                <div id='projects' style={ { display: 'flex' } }>

                    <div className="box">
                        <span class='toptip'>Click the image</span>
                        <a href="https://usmanalinoticeboardapp.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img className="proj" src="http://www.vectordiary.com/special-effects/008-notice-board/notice-board-background.jpg" alt="" />
                        </a>
                        <p>Notes Board</p>
                        <p>React js</p>
                        <a href="https://github.com/usmanali598/NotesOnBoard" target="_blank">
                            <img className="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <span class='toptip'>Click the image</span>
                        <a href="https://usmanaliredditapi.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img className="proj" src="https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg" alt="" />
                        </a>
                        <p>Reddit Api</p>
                        <p>React js</p>
                        <a href="https://github.com/usmanali598/ReduxFetchRedditApi" target="_blank">
                            <img className="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <span class='toptip'>Click the image</span>
                        <a href="https://usmanalicodes.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img className="proj" src="https://www.sjpl.org/sites/default/files/images/1718/nyt.png" alt="" />
                        </a>
                        <p>New York Times</p>
                        <p>React js</p>
                        <a href="https://github.com/usmanali598/React-Redux-NyTimeTopStories" target="_blank">
                            <img className="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>

                    <div className="box">
                        <span class='toptip'>Click the GitHub</span>
                        <a href="https://usmanalicodes.netlify.com/" target="_blank" style={ { display: 'flex' } }>
                            <img className="proj" src="https://i0.wp.com/guestspy.com/wp-content/uploads/2018/03/Top-10-Best-Mobile-Location-Tracker-900x480.png" alt="" />
                        </a>
                        <p style={ { paddingBottom: '0px' } }>Android Tracking Application</p>
                        <p>Android Java</p>
                        <a href="https://github.com/usmanali598/AndroidAppCarTracking" target="_blank">
                            <img className="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
                                alt="" />
                        </a>
                    </div>


                </div>
            </div>
        )
    }
}

export default FirstPage;