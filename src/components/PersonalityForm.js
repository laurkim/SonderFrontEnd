import React, { Component } from 'react';
import { Input, Icon, Form } from 'semantic-ui-react';
import { WatsonHeaders } from '../Adapters/Headers';
const URL = 'http://localhost:3000/api/v1/personality_insights';

class PersonalityForm extends Component {
  constructor() {
    super()

    this.state = {
      personalityInput: '',
      personalityInsights: []
    }
  }

  handleInputChange = event => {
    this.setState({ personalityInput: event.target.value})
  }

  handleInputSubmit = event => {
    event.preventDefault();
    this.fetchPersonalityInsight();
    this.setState({ personalityInput: '' });
  }

  fetchPersonalityInsight = () => {
    fetch(`${URL}?q=${this.state.personalityInput}`, {headers: WatsonHeaders()})
      .then(res => res.json())
      .then(data => this.setState({
        personalityInsights: data.personality_insights },
        () => console.log(this.state.personalityInsights)
      )
    )
  };

  render() {
    return (
      <div align='center'>
        <Form>
          <Form.TextArea
            value = {this.state.personalityInput}
            placeholder='Write your thoughts here...'
            onChange={e => this.handleInputChange(e)}/>
          <Form.Button onClick={e => this.handleInputSubmit(e)}>Get Your Personality</Form.Button>
        </Form>
      </div>
    );
  };
};

export default PersonalityForm;
