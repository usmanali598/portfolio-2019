import React, { Component } from 'react';
import Resume from './components/Resume';
import FirstPage from './components/FirstPage';
import './index.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component
{
  render()
  {
    return (
      <div >
        <BrowserRouter>
          <div className="content">
            <Route exact path='/' component={ FirstPage } />
            <Route path='/resume' component={ Resume } />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
