import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/index";
import { Form } from 'semantic-ui-react';

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

  fetchPersonalityInsight = input => {
    this.props.fetchPersonality(input);
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
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    topTracks: state.topTracks,
    trackFeatures: state.trackFeatures,
    topArtists: state.topArtists,
    personality: state.personalityTraits
  };
};

export default connect(mapStateToProps, actions)(PersonalityForm);
