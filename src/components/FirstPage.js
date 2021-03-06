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
    render(){
        return(
            <div style={{width:'100%', display:'inline-table'}}>
                <Nav/>
                <div style={ { display: 'flex' } }>
                <div className='imaas' style={ { margin: 'auto' } }>
                        <div className='imag'></div>
                        <div className='imag2'></div>
                    </div>
                </div>
                    <div id='projects' style={ { display: 'flex', flexWrap:'wrap' } }>

<div className="box">
    <span class='toptip'>Click board image</span>
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
    <span class='toptip'>Click reddit image</span>
    <a href="https://usmanaliredditapi.netlify.com/" target="_blank" style={ { display: 'flex' } }>
        <img className="proj" src="https://media.wired.com/photos/5954a1b05578bd7594c46869/master/w_1600,c_limit/reddit-alien-red-st.jpg" alt="" />
    </a>
    <p>Reddit Api</p>
    <p>React js, Redux</p>
    <a href="https://github.com/usmanali598/ReduxFetchRedditApi" target="_blank">
        <img className="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
            alt="" />
    </a>
</div>

<div className="box">
    <span class='toptip'>Click newYork image</span>
    <a href="https://usmanalicodes.netlify.com/" target="_blank" style={ { display: 'flex' } }>
        <img className="proj" src="https://www.sjpl.org/sites/default/files/images/1718/nyt.png" alt="" />
    </a>
    <p>New York Times</p>
    <p>React js, Redux</p>
    <a href="https://github.com/usmanali598/React-Redux-NyTimeTopStories" target="_blank">
        <img className="github" src="https://dwa5x7aod66zk.cloudfront.net/assets/pack/logo-github-fe55a081ff239877f791f5882f9c3cddc371653c88d9b06f504ea10f453996ed.jpg"
            alt="" />
    </a>
</div>

<div className="box">
    <span class='toptip'>Click Mobile Image</span>
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

<div className="box">
    <span class='toptip'>Click Finnkino Image</span>
    <a href="https://upcomingshowsbyusman.netlify.com/" target="_blank" style={ { display: 'flex' } }>
        <img className="proj" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Finnkino_Logo.svg/1200px-Finnkino_Logo.svg.png" alt="" />
    </a>
    <p style={ { paddingBottom: '0px' } }>Finnkino Upcoming Shows</p>
    <p>React js, XML Data</p>
    <a href="https://github.com/usmanali598/finnkino-shows" target="_blank">
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