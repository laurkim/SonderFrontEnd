import React, { Component } from 'react';
import { Input, Icon, Form } from 'semantic-ui-react';
import { WatsonHeaders } from '../Adapters/Headers';
import { Headers } from '../Adapters/Headers';
import PersonalityChart from './PersonalityChart';
const URL = 'http://localhost:3000/api/v1';

class PersonalityForm extends Component {
  constructor() {
    super()

    this.state = {
      personalityInput: '',
      personalityInsights: [],
      genres: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topArtists.length !== this.props.topArtists.length) {
      let genresArray = nextProps.topArtists.map(artist => artist.genres);
      let flattened = [].concat.apply([], genresArray);
      let words = flattened.join(", ").replace(/&/g, ' and ');
      this.setState({genres: words}, () => {this.fetchPersonalityInsight()})
    }
  }

  updateGenres = words => {
    console.log("inside update genres");
    this.setState({ genres: words })
    console.log("state is", this.state.genres);
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
    fetch(`${URL}/personality_insights?q=${this.state.genres}`, {headers: WatsonHeaders()})
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
            placeholder='Write your thoughts here...'
            onChange={e => this.handleInputChange(e)}/>
          <Form.Button onClick={e => this.handleInputSubmit(e)}>Get Your Personality</Form.Button>
        </Form>
        <br/>
        <PersonalityChart traits={this.state.personalityInsights}/>
      </div>
    );
  };
};

export default PersonalityForm;
