import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class ActionAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setState({open: true});
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  getHtml = () => {
    return {__html: this.props.message};
  }

  onOk = () => {
    if (this.props.onOk) {
      this.props.onOk();
    } else {
      this.handleClose();
    }
  }

  render() {
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
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         <div dangerouslySetInnerHTML={this.getHtml()} />
        </Dialog>
      </div>
    );
  }
}

ActionAlert.propTypes = {
    open: PropTypes.bool,
    message: PropTypes.string.isRequired,
    ok: PropTypes.bool,
    cancel: PropTypes.bool,
    okBtnTitle: PropTypes.string,
    onOk: PropTypes.func
};




export default ActionAlert;