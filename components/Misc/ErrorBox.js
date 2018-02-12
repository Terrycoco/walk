import React, {Component} from 'react';
import {connect} from 'react-redux';

require('styles/_forms.scss');


export class ErrorBox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }


  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  renderMessage() {
    return {__html: this.props.error.message  };
  }
  render () {
    if (this.props.error.show) {
      let title = this.props.error.title;
      return (
        <div onClick={this.handleClick} key="errbox" className="form-error">
         <h4 className="error-title">{title}</h4>
         <div dangerouslySetInnerHTML={this.renderMessage()}></div>
        </div>
     );
    } else {
      return null;
    }
    
  }
}

function mapStateToProps(state) {
  return {
    error: state.app.error
  };
}

export default connect(mapStateToProps)(ErrorBox);