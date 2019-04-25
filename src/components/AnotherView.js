import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../index.scss'
import { connect } from 'react-redux';
import
{
    hidingMain, showMain,
    hidingAnotherView, showAnotherView, trying, testing
} from '../action/newActions';
class AnotherView extends Component
{
    state = {
        // title: '',
        auth: '',
        timing: '',
        imgs: ''
    }
    componentWillReceiveProps( nextProps )
    {
        this.setState( {
            // title: nextProps.title,
            // auth: nextProps.auth,
            // timing: nextProps.timing,
            // imgs: nextProps.imgs
        } )
    }
    backNRefresh = () =>
    {
        // console.log( this.props.history )
        // this.props.history.push( '/' )
        window.history.back();
        setTimeout( () => window.location.reload(), 500 );
    }

    render()
    {
        // console.log( this.props, 'in com' )
        const { posts } = this.props;
        let topicName = this.props.tryingReducer.a;
        let pasta = posts && posts.map( lt => lt ).filter( papu => papu.section === topicName );
        let gettingIndex = this.props.testingReducer.a;
        let gettingTitle = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].title : '';
        let gettingAuthName = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].byline : console.log( 'auth is not showing' );
        let gettingTiming = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].created_date : console.log( 'created_date is not showing' );
        let gettingImage = pasta.length > 0 && gettingIndex !== '' ? pasta[ gettingIndex ].multimedia[ 0 ].url : console.log( 'ima es not showing' );

        // let gettingIndexTest = gettingIndex !== '' ? console.log( pasta[ gettingIndex ].title, 'getIn Test' ) : console.log( 'not showing' )
        // let propsContainer = pasta[ gettingIndex ];
        // let gettingTitle = pasta.length > 0 ? pasta[ gettingIndex ].title : console.log( 'title is not showing' );
        console.log( gettingImage, 'pasta here' )
        // console.log( gettingTitle, 'title here' )
        const style = { display: this.props.anotherViewReducer, borderBottom: '1px solid black' }
        return (
            <>
                {/* <table className={ this.props.title === '' ? 'non' : 'view2' } > */ }
                {/* <table className={ this.props.title !== '' ? 'view2' : '' } style={ style }> */ }
                <table className='view2' style={ style }>
                    <tbody>
                        <tr className='viewRow' onClick={ () => { this.backNRefresh() } }>
                            {/* <td className='tk'>{ this.props.title }</td> */ }
                            <td className='tk'>{ gettingTitle }</td>
                            <td className='tk'>{ gettingAuthName }</td>
                            <td className='tk'>{ gettingTiming }</td>
                        </tr>
                        <tr><td className='tk'>{ gettingImage && <img src={ gettingImage } alt='try' /> }</td></tr>
                    </tbody>
                    {/* <hr /> */ }
                </table>
                {/* { this.state.imgs === undefined ? this.backNRefresh() : <img src={ this.state.imgs.url } alt='try' className={ this.props.imgs === '' ? 'non' : '' } /> } */ }
            </>
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

export default connect( mapStateToProps, mapActionsToProps )( AnotherView );