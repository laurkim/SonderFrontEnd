import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/index";
import { Card, Form, Icon } from 'semantic-ui-react';

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
      let flattenedArray = [].concat.apply([], genresArray);
      let combinedGenres = flattenedArray.join(", ").replace(/&/g, ' and ').replace(/;/g, '');
      this.setState({genres: combinedGenres});
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
        <Card fluid>
          <Card.Header
            as="h1"
            content='What type of music do you like?'
            style={{
              marginTop: '15px'
            }}
          />
          <Card.Content>
            <Form>
              <Form.TextArea
                value = {this.state.personalityInput}
                placeholder='The more input you provide, the more accurate your personality results will be...'
                onChange={e => this.handleInputChange(e)}/>
              </Form>
          </Card.Content>
          <Card.Content extra>
            <Form.Button basic color="green" onClick={e => this.handleInputSubmit(e)}>Get Your Personality</Form.Button>
          </Card.Content>
        </Card>
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
