import React from "react";
import styled from "styled-components";

const EditableInput = styled.input`
  box-sizing: border-box;
  color: white;
  background: #313131;
  border: 0.5px solid rgb(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 30px;
  padding: 10px;
  font-size: 12px;
  text-overflow: ellipsis;
  width: 50%;
  z-index: 1;

  :hover {
    border: 1px solid rgb(0, 0, 0);
    background: black;
  }

  :focus {
    border-color: #2a2a2a;
    background: black;
  }
`;

export default class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: props.defaultValue || "Untitled",
      disabled: false,
    };

    // 🔧 createRef ishlatamiz:
    this.textInput = React.createRef();

    this.updateEditingState = this.updateEditingState.bind(this);
  }

  updateEditingState(e) {
    const textInput = this.textInput.current;

    if (this.state.currentText !== textInput.value) {
      this.setState({
        currentText: textInput.value,
        disabled: true,
      });

      setTimeout(() => {
        this.setState({ disabled: false });
        textInput.value = this.state.currentText;
      }, 2000);
    }
  }

  render() {
    const { currentText, disabled } = this.state;

    return (
      <EditableInput
        key={this.props.i}
        type="text"
        defaultValue={currentText}
        ref={this.textInput} // ✅ string ref emas, createRef obyekt
        onBlur={this.updateEditingState}
        disabled={disabled}
      />
    );
  }
}
