import React, { Component } from 'react';
import { FaMailBulk, FaMobileAlt, FaBasketballBall, FaMapMarkerAlt, FaMotorcycle, FaCamera, FaLaptopCode, FaCheck } from 'react-icons/fa';
import '../assets/resume.scss'
import Nav from './Nav'
class Resume extends Component
{
    componentDidMount()
    {
    }
    render()
    {
        // const { posts } = this.props;
        return (
            <div>
                <Nav />
                <div className='containResume'>
                    <div className='one'>
                        <div className='info'>
                            <div style={ { left: '750px', top: '170px', position: 'relative', width: '50%' } }><FaCheck color='white' />
                                <span style={ { color: 'inherit', fontSize: 'inherit', left: '76px' } }>Hardworking</span>
                            </div>
                            <div style={ { left: '750px', top: '170px', position: 'relative', width: '50%' } }><FaCheck color='white' />
                                <span style={ { color: 'inherit', fontSize: 'inherit', left: '55px' } }> Reliable</span></div>
                            <div style={ { left: '750px', top: '170px', position: 'relative', width: '50%' } }><FaCheck color='white' />
                                <span style={ { color: 'inherit', fontSize: 'inherit', left: '55px' } }> Easy going</span></div>
                        </div>
                    </div>
                    <div className='two'>
                        <div className='photoContainer'>
                            <div className='photos html'></div>
                            <div className='photos css'></div>
                            <div className='photos sass'></div>
                            <div className='photos js'></div>
                            <div className='photos vue'></div>
                            <div className='photos react'></div>
                            <div className='photos redux'></div>
                            <div className='photos gql'></div>
                            <div className='photos express'></div>
                            <div className='photos gulp'></div>
                            <div className='photos wp'></div>
                            <div className='photos photoshop'></div>
                            <div className='photos gimp'></div>
                            <div className='photos and'></div>
                            <div className='photos office'></div>
                        </div></div>
                    <div className='above'>
                        <div className='layerOne'>
                            <div className='topItems'>
                                <div className='imageArea'></div>
                                <div className='intro'>
                                    <div style={ { margin: 'auto' } }>
                                        <p style={ { fontSize: '35px', fontWeight: 'bold', letterSpacing: '10px' } }>USMAN ALI</p>
                                        <p style={ { fontWeight: 'bold', marginTop: '0px', marginBottom: '32px' } }>FRONT END DEVELOPER</p>
                                        <p style={ { fontWeight: 'bold', margin: '5px' } }><FaMobileAlt color='navy' size={ 25 } /><span style={ { fontSize: '15px', left: '25px', top: '-7px' } }>MOBILE</span></p>
                                        <p style={ { margin: '25px 0px' } }>+358 466144280</p>
                                        <p style={ { fontWeight: 'bold', margin: '5px' } }><FaMapMarkerAlt color='blue' size={ 25 } /> <span style={ { fontSize: '15px', left: '25px', top: '-7px' } }>ADDRESS</span></p>
                                        <p style={ { margin: '25px 0px' } }>Hakaniemenranta 12 C, Helsinki</p>
                                        <p style={ { fontWeight: 'bold', margin: '5px' } }><FaMailBulk color='green' size={ 25 } /><span style={ { fontSize: '15px', left: '25px', top: '-7px' } }> EMAIL</span></p>
                                        <p style={ { margin: '25px 0px' } }>usman_pervaiz@live.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='layerTwo'>
                                <div className="right">
                                    <div style={ { margin: 'auto', display: 'flex', flexDirection: 'column', height: '450px', width: '96%' } }>
                                        <p style={ {
                                            fontSize: '25px', fontWeight: 'bold',
                                            margin: '10px auto', marginBottom: '35px'
                                        } }>EXPERIENCES</p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>FRONT END DEVELOPER<span>2018-Present</span></p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>Craneworks OY LTD</p>
                                        <p style={ { paddingLeft: '5px', margin: '5px', marginBottom: '35px' } }>Developing digital signage templates</p>

                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>ANDROID JAVA DEVELOPER<span>2018-18</span></p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>Haaga Helia UAS</p>
                                        <p style={ { paddingLeft: '5px', margin: '5px', marginBottom: '35px' } }>Developed full stack native android location tracking application with Java</p>

                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>ASSISTANT ACCOUNTANT<span>2014-2015</span></p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>National Furnishers</p>
                                        <p style={ { paddingLeft: '5px', margin: '5px', marginBottom: '35px' } }>Assisted to cash manager, finance manager and reporting to directors</p>
                                    </div></div>

                                <div className="center" style={ { display: 'flex', flexDirection: 'column' } }>
                                    <div style={ { margin: 'auto', display: 'flex', flexDirection: 'column', height: '450px', width: '91%' } }>
                                        <p style={ {
                                            fontSize: '25px', fontWeight: 'bold',
                                            margin: '10px auto', marginBottom: '35px'
                                        } }>EDUCATION</p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px' } }>BACHELORS IN BUSINESS INFORMATION TECHNOLOGY</p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>Haaga Helia UAS</p>
                                        <p style={ { paddingLeft: '5px', margin: '5px' } }>2014-2018</p>

                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px' } }>MASTERS IN BUSINESS ADMINISTRATION</p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>IQRA UNIVERSITY, ISLAMABAD</p>
                                        <p style={ { paddingLeft: '5px', margin: '5px' } }>2009-2012</p>

                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px' } }>BACHELORS OF COMMERCE</p>
                                        <p style={ { fontWeight: 'bold', paddingLeft: '5px', margin: '5px' } }>PUNJAB UNIVERSITY</p>
                                        <p style={ { paddingLeft: '5px', margin: '5px' } }>2007-2009</p>
                                    </div>
                                </div>
                                <div className="left" style={ { display: 'flex', flexDirection: 'column' } }>
                                    <div style={ { margin: 'auto', display: 'flex', flexDirection: 'column', height: '450px', } }>
                                        <p style={ {
                                            fontSize: '25px', fontWeight: 'bold', width: '270px', margin: '22px auto', marginBottom: '35px', textAlign: 'center'
                                        } }>SKILLS</p>
                                        <p style={ { margin: '0px' } }>JAVASCRIPT</p>
                                        <input type='range' value={ 75 } />
                                        <p style={ { margin: '0px' } }>JAVA</p>
                                        <input type='range' value={ 65 } />
                                        <p style={ { margin: '0px' } }>HTML/CSS</p>
                                        <input type='range' value={ 85 } />
                                        <p style={ { margin: '0px' } }>DESIGN</p>
                                        <input type='range' value={ 70 } />
                                        <div className='interests' >
                                            <h3 style={ { margin: '35px 0px' } }>INTERESTS</h3>
                                            <div style={ { display: 'flex', width: '100%', flexWrap: 'wrap', height: '100%', flexDirection: 'column' } }>
                                                <div className='sports'>
                                                    <FaBasketballBall color='#2f0e6f' size={ 50 } />
                                                    Sports
                                                </div>
                                                <div className='sports'>
                                                    <FaMotorcycle color='black' size={ 50 } />
                                                    Traveling
                                                </div>
                                                <div className='sports'>
                                                    <FaCamera color='green' size={ 50 } />
                                                    Photography
                                                </div>
                                                <div className='sports'>
                                                    <FaLaptopCode color='#2f0e6f' size={ 50 } />
                                                    Programming
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;