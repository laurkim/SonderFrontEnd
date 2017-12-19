import React, { Component } from 'react';
import { Input, Icon, Form } from 'semantic-ui-react';

class PersonalityInput extends Component {
  constructor() {
    super()

    this.state = {
      personalityInput: ''
    }
  }

  handleInputChange = event => {
    // console.log("inside handle input change");
    // console.log(event.target.value);
    this.setState({ personalityInput: event.target.value})
    // console.log("state is", this.state.personalityInput);
    console.log("--------------------");
  }

  handleInputSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div align='center'>
        <Form>
          <Form.TextArea placeholder='Write your thoughts here...' onChange={e => this.handleInputChange(e)}/>
          <Form.Button onClick={e => this.handleInputSubmit(e)}>Get Your Personality</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PersonalityInput;
