import React, {Component} from 'react';
import {getTip} from 'actions/appActions';
import {connect} from 'react-redux';
import icons from 'styles/icons';


require('styles/_forms.scss');


class FieldText extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getLink = this.getLink.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.keyword) {
      this.props.getTip(this.props.keyword);
    }
  }

  getLink() {
    let link = null;
    if (this.props.keyword) {
      link = <img className="tip-link" src={icons.help} />;
    }
    return link;
  }

  render() {

    return (
      <div className="descr" onClick={this.handleClick}>
        {this.props.children}
        {this.getLink()}
      </div>
    );
  }
}

export default connect(null, {getTip})(FieldText);