import React, {Component} from 'react';
import Head from 'components/Head';
import {requestRoute} from 'actions/navActions';
import PageBar from 'components/PageBar';
import Link from './Link';
//import {isProd} from 'utils/environment';
import * as actions from 'actions/navActions';
import {connect} from 'react-redux';
import sizing from 'styles/sizing';
//import Page from 'components/Page';

const stylesheet = require('./nav.scss');

let imgUrl = require('images/moccasins_sm.jpg');
let styles = {
  home: {
    height: '100%',
    width: '100%',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    overflow: 'hidden',
    backgroundPosition: 'bottom center'
  }
};

class Home extends Component {

  componentDidMount() {
    //some resetting here -- create page back to 0
    // this.props.setCreatePageIdx(0);
  }

  // signIn() {
  //   this.props.requestRoute("signin", "left");
  // }

  // signOut() {
  //   this.props.logout();
  // }

  render() {
    let iconRight, onRight;
    let homestyle = styles.home;
    if (this.props.loggedIn) {
      iconRight = 'Sign Out';
     // onRight = this.signOut;
    } else {
      iconRight = "Sign In";
     // onRight = this.signIn;
    }
    return (      
      <div className="HOME" style={homestyle}>
      <PageBar title="ShareWalks" leftIcon="home" rightIcon="Sign In"/>
      <style dangerouslySetInnerHTML={{__html: stylesheet}}></style>
        <div className="link-menu readable">
           <Link  className="homelink" key="search" to="search" fromDir="right"><span>Find A Walk</span><img className="right-icon" src="static/images/right_arrow.png"/></Link>
           <Link  className="homelink" key="create" to="create" fromDir="right"><span>Create A Walk</span><img className="right-icon" src="static/images/right_arrow.png"/></Link>
           <Link  className="homelink" key="mywalks" to="mywalks" fromDir="right"><span>My Walks</span><img className="right-icon" src="static/images/right_arrow.png"/></Link>
           <Link  className="homelink" key="about" to="/about" fromDir="right"><span>About ShareWalks</span><img className="right-icon" src="static/images/right_arrow.png"/></Link>
     
        </div>
        <div className="feet" />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   // isAdmin: state.auth.aCheck,
   // loggedIn: state.auth.authenticated
    // height: state.app.height,
    // browser: state.browser
  };
}

export default connect(mapStateToProps, actions)(Home);


     // {(this.props.isAdmin ?  <Link  className="homelink" key="admin" to="admin" fromDir="right"><span>Admin</span><img className="right-icon" src="/images/right_arrow.png"/></Link> : null)}
          //  {(this.props.isAdmin ?  <Link  className="homelink" key="test" to="test" fromDir="right"><span>Test</span><img className="right-icon" src="/images/right_arrow.png"/></Link> : null)}
