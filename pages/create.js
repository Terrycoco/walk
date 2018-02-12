import React, {Component} from 'react';
import Head from 'components/Head';
import Nav from 'components/Nav';
import withRedux from 'next-redux-wrapper';
import withMui from 'components/hocs/withMui';
import { bindActionCreators } from 'redux';
import initStore from 'root/store';
import Shell from 'components/Shell';


class NEWPAGE extends Component {
  static async getInitialProps() {
  }
  componentWillMount() {

  }
  componentDidMount()  {

  }


  render() {
    return (
    <Shell pageTitle="Create A Walk">


    </Shell>
    );
   }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps )(withMui(NEWPAGE));
