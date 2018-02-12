import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class InputDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ''
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setState({open: true});
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleTextChange(ev, value) {
    if (this.props.charLimit && value.length > this.props.charLimit) {
      let msg = `Limited to ${this.props.charLimit} characters`;
      this.props.showAlert({message: msg});
    } else {
      this.setState({value: value});
    }
  }

  getHtml = () => {
    return {__html: this.props.message};
  }

  onOk = () => {
    if (this.props.onOk) {
      this.props.onOk(this.state.value);
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
    let title = (this.props.title ? <h4>{this.props.title}</h4> : null);

    const actions = [ok, cancel];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         {title}
         <div dangerouslySetInnerHTML={this.getHtml()} />
         <TextField
            id={this.props.id}
            defaultValue={this.props.defaultText}
            value = {this.state.value}
            onChange={this.handleTextChange}
         />
        </Dialog>
      </div>
    );
  }
}

InputDialog.propTypes = {
    id:PropTypes.any.isRequired,
    open: PropTypes.bool,
    title: PropTypes.string, //optional
    message: PropTypes.string.isRequired,
    ok: PropTypes.bool,
    cancel: PropTypes.bool,
    okBtnTitle: PropTypes.string,
    onOk: PropTypes.func,
    defaultText: PropTypes.string,
    charLimit: PropTypes.number
};




export default InputDialog;