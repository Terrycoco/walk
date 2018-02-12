import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {requestRoute} from 'actions/navActions';
import {hideAlert} from 'actions/appActions';
import propTypes from 'prop-types';
/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class AlertDialog extends React.Component {

  handleClose = () => {
    this.props.hideAlert();
  };

  getHtml = () => {
    return {__html: this.props.message};
  }

  onOk = () => {
    if (this.props.okRoute) {
      this.props.requestRoute(this.props.okRoute, "left");
      this.props.hideAlert();
    } else {
      this.props.hideAlert();
    }
  }

  render() {
    let title = null;
    if (this.props.title) {
     title = <h5>{this.props.title}</h5>
    }
    let cancel = null;
    //ok is always there
    let ok = <RaisedButton
        label={this.props.okBtnTitle}
        secondary={true}
        onTouchTap={this.onOk}
      />;
      //cancel is optional
      if (this.props.cancel) {
        cancel = <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />;
      }

    const actions = [ok, cancel];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
         {title}
         <div dangerouslySetInnerHTML={this.getHtml()} />
        </Dialog>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    title: state.app.alert.title,
    open: state.app.alert.open,
    message: state.app.alert.message,
    ok: state.app.alert.ok,
    cancel: state.app.alert.cancel,
    okBtnTitle: state.app.alert.okBtnTitle,
    okRoute: state.app.alert.okRoute
  };
}

export default connect(mapStateToProps, {hideAlert, requestRoute})(AlertDialog);