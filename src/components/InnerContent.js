import React, { Component } from 'react';
import AnotherView from './AnotherView';
import '../index.scss';
import { connect } from 'react-redux';

import
{
  hidingMain, showMain,
  hidingAnotherView, showAnotherView, trying, testing
} from '../action/newActions';
class InnerContent extends Component
{
  state = {
    // inx: 0,
    title: '',
    auth: '',
    timing: '',
    imgs: '',
    display: ''
  }
  componentDidMount()
  {
    // this.props.onShowMain()
    console.log( this.props, 'inner content' )
  }
  handleClick = index =>
  {
    // console.log( index, 'lets lkejl e lk ' )
    this.setState( ( prevState, props ) => ( {
      // inx: index,
      // title: this.props.tsta[ index ].title,
      // auth: this.props.tsta[ index ].byline,
      // timing: this.props.tsta[ index ].created_date,
      // imgs: this.props.tsta[ index ].multimedia[ 0 ],
      display: 'none'
    } ) )
    this.props.onTesting( index )
    this.props.onHidingMain()
    this.props.onShowAnotherView()
  }
  render()
  {
    // const { nam } = this.props;
    const { posts } = this.props;
    // const { tsta } = this.props;
    let topicName = this.props.tryingReducer.a
    // const { inx } = this.state;
    // const { title } = this.state;
    const { auth } = this.state;
    const { timing } = this.state;
    const { imgs } = this.state;
    // const { display } = this.state;
    let asta = posts && posts.map( lt => lt ).filter( apu => apu.section === topicName );
    // const tstHandleClick = ( index ) =>
    // {
    //   let title = asta[ index ].title;
    //   let auth = asta[ index ].byline;
    //   let timing = asta[ index ].created_date;
    //   let imgs = asta[ index ].title;
    // }

    // (tsta.length > 0) ? console.log( tsta[inx].title, '@@@@@@tsta') : console.log('here')
    // console.log( asta, 'title here' )
    const style = {
      display: this.props.navReducer
    }
    return (
      <div className="nav" style={ style } >

        { asta && asta.map( ( it, i ) =>
        {
          return (
            // <div key={ i } className={ display === '' ? 'NavContainer' : 'non' } id={ i } onClick={ this.handleClick.bind( this, i ) }>
            <div className='NavContainer' id={ i } key={ i } onClick={ this.handleClick.bind( this, i ) }>
              <div className="NavLeft" >
                { it.multimedia.filter( img => img.length > 1 ) ? <img className='smallPic' src={ it.multimedia.length > 0 ? it.multimedia[ 0 ].url : 'https://www.sjpl.org/sites/default/files/images/1718/nyt.png' } alt='pics' /> : <p>No Image..</p> }
                <p >{ it.updated_date }</p>
                <p className="author" style={ { margin: 'auto' } }>{ it.byline }</p>
              </div>
              {/* <div className="NavRight" onClick={ e => (e.target.parentNode !== '') ? console.log(e.target.parentNode.getElementsByClassName('se')[0].innerText) : '' }> */ }
              <div className="NavRight" >
                <h1 className='se'>{ it.abstract }</h1>
                <p>{ it.title }</p> <a target="_parent" href={ it.url }>Read More..</a>
                <p>{ it.des_facet.map( chk => `#${ chk }  ` ) }</p>
              </div>
            </div>
          )
        } ) }
        {/* <AnotherView posts={ posts } /> */ }
        {/* <AnotherView inx={ inx } auth={ auth } timing={ timing } title={ title } imgs={ imgs } /> */ }
      </div>
    )
  }
}

const mapStateToProps = ( state, props ) =>
{
  // console.log( state, 'props in state to props' )
  return {
    navReducer: state.navReducer,
    anotherViewReducer: state.anotherViewReducer,
    tryingReducer: state.tryingReducer,
    testingReducer: state.testingReducer
  }
};

const mapActionsToProps = {
  onShowAnotherView: showAnotherView,
  onHidingAnotherView: hidingAnotherView,
  onHidingMain: hidingMain,
  onShowMain: showMain,
  onTrying: trying,
  onTesting: testing,
};

export default connect( mapStateToProps, mapActionsToProps )( InnerContent );