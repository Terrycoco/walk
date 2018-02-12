import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import registerSW from 'offline/registerSW';
import { setDim } from 'actions/appActions';
import {toggleMenu} from 'actions/navActions';
import { initStorage, syncStorage, ageStore } from 'actions/storageActions';
import stylesheet from './shell.scss';
import Head from 'components/Head';
import PageBar from 'components/PageBar';
import Drawer from 'material-ui/Drawer';
import Nav from 'components/Nav';

class Shell extends Component {
  getInitialProps() {
    
  }
  constructor(props) {
    super(props);
    this.state = {
      isAbsolute:  props.isAbsolute || false,
      menuOpen: false,
      className: 'PAGE'
    };
    this.bound_onResize = this.onResize.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    if (process.env.NODE_ENV ==='production') {
      registerSW();
    }
    this.props.initStorage();
    this.props.syncStorage();
    this.bound_onResize();
    window.addEventListener('resize', this.bound_onResize);
  }




  componentWillUnmount() {
    window.removeEventListener("resize", this.bound_onResize);
  }


  onResize() {
    //set current dimensions in store 
    this.props.setDim({height: window.innerHeight || document.documentElement.clientHeight, width: window.innerWidth || document.documentElement.clientWidth});
  }

  closeDrawer = () => {
    this.props.toggleMenu(false);
  }

  openDrawer = () => {
   this.props.toggleMenu(true);
  }

  toggleDrawer = () => {
    this.props.toggleMenu(!this.props.menuOpen);
  }

  render() {
    let drawerWidth = this.props.width;
    //let classname = (this.state.isAbsolute ? "PAGE-ABSOLUTE" : 'PAGE');
    return (
    <div className="APP" style={{height: this.props.height, width: this.props.width, overflowY: 'hidden'}}>
      <Head title="ShareWalks"  />
      <style dangerouslySetInnerHTML={{__html: stylesheet}}></style>
      <div id="page" ref="page" 
         className={this.state.classname} 
         style={{height: this.props.height, width: this.props.width, overflowY: 'hidden'}}
         onClick={this.closeDrawer}
          >
         <PageBar 
             title={this.props.title || "ShareWalks"}
             iconLeft="home"
             onLeft={this.toggleDrawer} />
          <div style={{height: this.props.height, width: this.props.width, overflowY: 'auto'}}>
             {this.props.children}
         </div>
      </div>
      <Drawer 
           open={this.props.menuOpen}
           docked={false}
           width={drawerWidth}
      >
        <Nav />
      </Drawer>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch)  {
  return {
    setDim: bindActionCreators(setDim, dispatch),
    initStorage: bindActionCreators(initStorage, dispatch),
    syncStorage: bindActionCreators(syncStorage, dispatch),
    toggleMenu: bindActionCreators(toggleMenu, dispatch)
  }
}

function mapStoreToProps(store) {
  return {
    height: store.app.height,
    width: store.app.width,
    menuOpen: store.nav.menuOpen
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(Shell);