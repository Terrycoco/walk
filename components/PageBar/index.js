import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestRoute} from 'actions/navActions';
const stylesheet = require('./pagebar.scss');
const icons = require('styles/icons').pageBar;


class PageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerLeft: " ",
      innerRight: " "
    };
    this.getHandler = this.getHandler.bind(this);
    this.setInner = this.setInner.bind(this);
  }


  componentDidMount() {
    this.setInner(this.props);
  }

  setInner(props) {
    if (!props.iconLeft) {
      this.setState({innerLeft: " "});
    }
    //sets state
    else if (props.iconLeft && icons[props.iconLeft]) {
      this.setState({innerLeft: <img className="icon" src={icons[props.iconLeft]} width="40px" />});
    //if text 
    } else  {
      this.setState({innerLeft: props.iconLeft});
    }


    if (!props.iconRight) {
      this.setState({innerRight: " "});
    } else if (props.iconRight && icons[props.iconRight]) {
      this.setState({innerRight: <img className="icon" src={icons[props.iconRight]} width="40px"/>});
    //if text 
    } else {
      this.setState({innerRight: props.iconRight});
    }
  }

  componentWillReceiveProps(nextProps) {
   this.setInner(nextProps);
  }

  getHandler(side) {
      if (this.props['on' + side]) {
        let passed = this.props['on' + side];
        //if passed in a function  use it
        if (typeof passed === 'function') {
          return function(event) {
            event.stopPropagation();
            window.speechSynthesis.cancel();
            passed(); //flips
          }
        }
        else if (passed === 'prev') {
          let prev = this.props.prevRoute;
          let func = this.props.requestRoute;
          let handler = function(e) {
            window.speechSynthesis.cancel();
            func(prev, "left");
          }
          return handler;
        } 
        else {
          //just passed name of route to take
          let func = this.props.requestRoute;
          return function(e) {
            window.speechSynthesis.cancel();
            func(passed, side.toLowerCase());
          }
        }
      //not passed
      } else {
         return function(e) {
          //does nothing
         }
      }

  }


  render() {
    return (
      <div className="PAGEBAR PageBar">
        <style dangerouslySetInnerHTML={{__html: stylesheet}}></style>
        <span className="Left" onClick={this.getHandler("Left")}>{this.state.innerLeft}</span>
        <span className="title">{this.props.title}</span>
        <span className="Right" onClick={this.getHandler("Right")}>{this.state.innerRight}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   prevRoute: state.nav.prevRoute,
   menuOpen: state.nav.menuOpen
  };
}


export default connect(mapStateToProps, {requestRoute})(PageBar);
