import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react';

class PersonalityChart extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {},
      options: {}
    }
  }

  componentDidMount() {
    this.setChartData();
  }

  setChartData = () => {
    const traits = this.props.traits.personality;
    const data = {
      labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
      datasets: [
        {
          label: 'Your Big5 Personality Traits',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [traits[0].raw_score, traits[1].raw_score, traits[2].raw_score, traits[3].raw_score, traits[4].raw_score]
        }
      ]
    }

    this.setState({
      chartData: data,
    });
  }

  render() {
    return (
      <div>
        <Header as='h3' textAlign='center'>
          <Header.Content>
            Your Personality Traits
          </Header.Content>
        </Header>
        <Radar data={this.state.chartData} />
      </div>
    )
  }
};

export default PersonalityChart;
