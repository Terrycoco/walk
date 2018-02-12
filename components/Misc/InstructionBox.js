import React, {Component} from 'react';

require('styles/_forms.scss');

const innerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxHeight: '80%',
  paddingRight: '5%',
  paddingLeft: '5%'
};

class InstructionBox extends Component {
  constructor(props) {
    super(props);
    this.getText = this.getText.bind(this);
  }
  
  getText() {
    return {__html: this.props.text};
  }
  render() {
    return (
      <div>
      <div className="descr" dangerouslySetInnerHTML={this.getText()}/>
      </div>
    );
  }
}

export default InstructionBox;