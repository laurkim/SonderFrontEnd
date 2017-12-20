import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react';

class PersonalityChart extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.traits.length !== this.props.traits.length) {
      const traits = nextProps.traits;
      const data = {
        labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Emotional Range'],
        datasets: [
          {
            label: 'Your Personality Traits',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [traits[0].raw_score, traits[1].raw_score, traits[2].raw_score, traits[3].raw_score, traits[4].raw_score]
          }
        ]
      };
      this.setState({ chartData: data }, () => this.returnChartData());
    }
  }

  returnChartData = () => {
    return this.state.chartData;
  }

  render() {
    return (
      <div>
        <Header as='h3'>
          <Header.Content>
            Your Personality Traits
          </Header.Content>
        </Header>
        <Header as='h4'>
          <Header.Content>
            <Radar data={this.returnChartData} />
          </Header.Content>
        </Header>
      </div>
    )
  }
};

export default PersonalityChart;

// export default React.createClass({
//   displayName: 'RadarExample',
//
//   render() {
//     return (
//       <div>
//         <h2>Radar Example</h2>
//         <Radar data={data} />
//       </div>
//     );
//   }
// });
