import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as actions from 'actions/navActions';
import {connect} from 'react-redux';

const stylesheet = require('./nav.scss');

class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.requestRoute(this.props.to, this.props.fromDir);
  }
  render() {
    return (
      <div className="homelink" onClick={this.handleClick} >
        <style dangerouslySetInnerHTML={{__html: stylesheet}}></style>
        <span key={this.props.key}>{this.props.children}</span>
      </div>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  fromDir: PropTypes.string,
  key: PropTypes.string
};

export default connect(null, actions)(Link);