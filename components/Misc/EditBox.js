import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import {myColors} from 'styles/theme';
import Toolbar from 'components/Forms/Toolbar';
import {isNumeric} from 'utils/math';

require('./editbox.scss');
const styles = {

};

class EditBox extends Component {
 constructor(props) {
  super(props);
  this.state = {
    value: '',
    html: '',
    placeholder: props.placeholder || 'Enter text',
    label: props.label,
    cursorPos: null,
    dialogOpen: false,
    previewMode: false
  };
 }

 componentDidMount() {
  var val = this.props.value || '';
  var clean = DOMPurify.sanitize(this.props.value, {ALLOWED_TAGS: ['img', 'p'], ALLOWED_ATTR: ['src', 'width']});
  this.setState({value: val, html: clean});
 }

 handleFieldFocus = (e) => {
  e.target.select();
 }

 handleTextChange = (event, value) => {
    event.stopPropagation();
    event.preventDefault();
    // allow only <img> <p>
    var clean = DOMPurify.sanitize(value, {ALLOWED_TAGS: ['img', 'p'], ALLOWED_ATTR: ['src', 'width']});
    this.setState({value: value, html: clean});
 }

 saveCursorPos = (event) => {
    var val = this.state.value,
      start = event.target.selectionStart,
      end = event.target.selectionEnd;
      this.setState({cursorPos: start});
 }

 insertPic = (imgUrl) => {
   //wrap in html
   const a = this.state.html;
   const b = '<img src="' + imgUrl + '" width="80%" />';
   const pos = (isNumeric(this.state.cursorPos) ? this.state.cursorPos : a.length);
   var output = a.substr(0, pos) + b + a.substr(pos);
   this.setState({html: output});
 }

 previewToggle = () => {
  this.setState({previewMode: !this.state.previewMode});
 }

 renderHTML=() => {
    return {__html: this.state.html};
  }

 render() {
  let editClass = 'editbox-inner editbox-edit';
  let htmlClass = 'hidden';
  if (this.state.previewMode) {
    editClass = 'hidden';
    htmlClass = 'editbox-inner';
  }
  return (
  <div className="editbox-outer">
    <Toolbar 
        tip={this.props.tip}
        tipKeyword={this.props.tipKeyword} 
        pic={this.props.pic}
        onPicClick={this.insertPic}
        preview={this.props.preview}
        onPreviewClick={this.previewToggle}
        label="Point Narrative" />
    <textarea
        id={this.props.id}
        ref="input"
        className={editClass}
        value={this.state.value}
        placeholder={this.state.placeholder}
        onChange={this.handleTextChange}
        onBlur={this.handleDescrLostFocus}
        onFocus={this.handleFieldFocus}
        onClick={this.saveCursorPos}
      />
      <div className={htmlClass} dangerouslySetInnerHTML={this.renderHTML()} />
 
</div>

  );
 }

}

EditBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  tipKeyword: PropTypes.string
};
export default EditBox;

    // <textarea
    //     id={this.props.id}
    //     ref="input"
    //     className={editClass}
    //     value={this.state.value}
    //     placeholder={this.state.placeholder}
    //     floatingLabelText={this.state.label}
    //     floatingLabelFixed={true}
    //     onChange={this.handleTextChange}
    //     onBlur={this.handleDescrLostFocus}
    //     fullWidth={true}
    //     multiLine={true}
    //     onFocus={this.handleFieldFocus}
    //     onClick={this.saveCursorPos}
    //     underlineShow={false}
    //     style={styles.editbox}
    //   />