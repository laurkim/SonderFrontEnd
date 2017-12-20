import React, { Component } from 'react';
import { Input, Icon, Form } from 'semantic-ui-react';
import { WatsonHeaders } from '../Adapters/Headers';
import { Headers } from '../Adapters/Headers';
import PersonalityChart from './PersonalityChart';
const URL = 'http://localhost:3000/api/v1/personality_insights?';

class PersonalityForm extends Component {
  constructor() {
    super()

    this.state = {
      personalityInput: '',
      personalityInsights: [],
      genres: '',
      combinedInput: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topArtists.length !== this.props.topArtists.length) {
      let genresArray = nextProps.topArtists.map(artist => artist.genres);
      let flattened = [].concat.apply([], genresArray);
      let words = flattened.join(", ").replace(/&/g, ' and ').replace(/;/g, '');
      this.setState({genres: words});
    }
  }

  handleInputChange = event => {
    this.setState({ personalityInput: event.target.value})
  }

  handleInputSubmit = event => {
    event.preventDefault();
    this.combineInput(this.state.personalityInput);
    this.setState({ personalityInput: '' });
  }

  combineInput = input => {
    const songTitles = this.props.topTracks.map(track => track.name).join(" ");
    const query = `${input} ${this.state.genres} ${songTitles}`;
    this.setState({ combinedInput: query },
      () => this.fetchPersonalityInsight(this.state.combinedInput)
    );
  }

  fetchPersonalityInsight = () => {
    fetch(`${URL}q=${this.state.combinedInput}`, {headers: WatsonHeaders()})
      .then(res => res.json())
      .then(data => this.setState({
        personalityInsights: data.personality_insights.personality },
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
            placeholder='The more input you provide, the more accurate your personality results will be...'
            onChange={e => this.handleInputChange(e)}/>
          <Form.Button onClick={e => this.handleInputSubmit(e)}>Get Your Personality</Form.Button>
        </Form>
        <br/>
        {
          this.state.combinedInput !== '' ?
          <PersonalityChart traits={this.state.personalityInsights} /> : null
        }
      </div>
    );
  };
};

export default PersonalityForm;
