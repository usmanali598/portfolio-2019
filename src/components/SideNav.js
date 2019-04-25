import React, { Component } from 'react';
import InnerContent from './InnerContent';
import AnotherView from './AnotherView';
import { Link, NavLink } from 'react-router-dom';
import '../index.scss';
import { hidingMain, showMain, hidingAnotherView, showAnotherView, trying, unTesting } from '../action/newActions';
import { connect } from 'react-redux';


class SideNav extends Component
{
  componentDidMount()
  {
    // this.props.onHidingMain()
    this.props.onHidingAnotherView()

  }
  handleClik = ( e ) =>
  {
    // this.props.onShowAnotherView()
    this.props.onShowMain()
    this.props.onTrying( e.target.innerHTML )
    this.props.onUnTesting()
    this.props.onHidingAnotherView()

    // console.log( this.props, 'por e poeopei' )
  }
  render()
  {
    const { posts } = this.props;
    const partOne = this.props.posts.map( ( post, i ) => post.section )
    const ts = partOne.filter( ( item, pos, self ) => self.indexOf( item ) == pos )
    let { a } = this.props.tryingReducer
    let tsta = posts && posts.map( lt => lt ).filter( appu => appu.section === a );

    // console.log( tsta, 'Side nav here' )
    // console.log( this.props.testingReducer.a, 'testing Reducer here' )
    return (
      <>
        <table className='table table-hover list' style={ { width: '20%' } } onClick={ this.handleClik }>
          <tbody>
            <tr><td className="sideRows"> Sections..</td></tr>
            { ts.map( ( name, i ) => <tr key={ i } ><td className="sides" onClick={ this.props.targ } >{ name }</td></tr> ) }
          </tbody>
        </table>
        <div className="rit">
          {/* { nam &&
            <Link to="/AnotherView" style={ { textDecoration: 'none', color: 'black' } }> */}
          <table style={ { width: '100%', borderBottom: '1px solid black', borderWidth: '100%' } } ><tbody>
            <tr ><td><span style={ { fontWeight: 'bold' } }>Top Stories</span>( { a ? a : '-' } )</td></tr>
          </tbody></table>
          <InnerContent posts={ posts } />
          <AnotherView posts={ posts } />
          {/* { this.props.testingReducer.a && this.props.testingReducer.a !== '' ? <AnotherView posts={ posts } /> : console.log( 'not here' ) } */ }

          {/* <InnerContent tsta={ tsta } nam={ a } posts={ posts } /> */ }
          {/* </Link> } */ }
        </div>
      </>
    )
  }
}


// export default SideNav;

const mapStateToProps = ( state ) =>
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
  onUnTesting: unTesting
};

export default connect( mapStateToProps, mapActionsToProps )( SideNav );