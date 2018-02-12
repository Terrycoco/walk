import React, {Component} from 'react';
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
    <Shell pageTitle="Find A Walk">


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
