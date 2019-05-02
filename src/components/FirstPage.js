import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import Nav from './Nav';
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
                    <marquee style={ { position: 'absolute', fontSize: '12px' } }>Site under construction atm..</marquee>
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
                        <span class='toptip'>Click the Image</span>
                        <a href="https://play.google.com/store/apps/details?id=com.sometry.usman.proretro" target="_blank" style={ { display: 'flex' } }>
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