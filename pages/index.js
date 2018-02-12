import React, {Component} from 'react';
import Head from 'components/Head';
import Nav from 'components/Nav';
import withRedux from 'next-redux-wrapper';
import withMui from 'components/hocs/withMui';
import { bindActionCreators } from 'redux';
import initStore from 'root/store';
import {setDim, setText} from 'actions/appActions';
import { syncStorage} from 'actions/storageActions';
import Shell from 'components/Shell';
import TextField from 'material-ui/TextField';

class App extends Component {
  getInitialProps({ store, isServer}) {
    return {isServer}
  }
  
  componentDidMount()  {

  }

  componentWillMount() {
   // this.props.toggleMenu(true);
  }

  handleChange = (event) => {
    this.props.setText(event.target.value);
    event.preventDefault();
    this.props.syncStorage(); //persist 
  }

  render() {
    return (
    <Shell title="Sharewalks" >
      <Head title="Sharewalks">
      </Head>
    </Shell>
    );
  }
}

function mapStateToProps(state) {
  return {
    browser: state.browser,
    height: state.app.height,
    width: state.app.width,
    textValue: state.app.textValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDim: bindActionCreators(setDim, dispatch),
    setText: bindActionCreators(setText, dispatch),
    syncStorage: bindActionCreators(syncStorage, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(withMui(App));
