import React, { Component } from 'react';
import { Radar, Doughnut } from 'react-chartjs-2';
import { Header, Button, Grid } from 'semantic-ui-react';

class PersonalityChart extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {},
      subTraitClicked: false
    }
  }

  componentDidMount() {
    this.setChartData();
  }

  convertToPercentage = score => {
    return (score * 100).toFixed(0);
  }

  setChartData = () => {
    const traits = this.props.traits.personality;
    const traitOne = this.convertToPercentage(traits[0].raw_score);
    const traitTwo = this.convertToPercentage(traits[1].raw_score);
    const traitThree = this.convertToPercentage(traits[2].raw_score);
    const traitFour = this.convertToPercentage(traits[3].raw_score);
    const traitFive = this.convertToPercentage(traits[4].raw_score);
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
          data: [traitOne, traitTwo, traitThree, traitFour, traitFive]
        }
      ]
    }

    this.setState({
      chartData: data,
    });
  }

  replaceChart = event => {
    this.setState({
      subTraitClicked: true
    });

    const traits = this.props.traits.personality;
    let traitName = event.target.innerText;
    if (traitName === "Neuroticism") traitName = "Emotional range";
    const trait = traits.find(object => {return object.name === traitName});
    const traitOne = this.convertToPercentage(trait.children[0].raw_score);
    const traitTwo = this.convertToPercentage(trait.children[1].raw_score);
    const traitThree = this.convertToPercentage(trait.children[2].raw_score);
    const traitFour = this.convertToPercentage(trait.children[3].raw_score);
    const traitFive = this.convertToPercentage(trait.children[4].raw_score);
    const traitSix = this.convertToPercentage(trait.children[5].raw_score);
    const childData = {
      labels: [
        trait.children[0].name,
        trait.children[1].name,
        trait.children[2].name,
        trait.children[3].name,
        trait.children[4].name,
        trait.children[5].name
      ],
      datasets: [{
        data: [
          traitOne,
          traitTwo,
          traitThree,
          traitFour,
          traitFive,
          traitSix
        ],
        backgroundColor: [
          '#EC7063',
          '#5DADE2',
          '#F0B27A',
          '#45B39D',
          '#AF7AC5',
          '#F5F275'
        ],
        hoverBackgroundColor: [
          '#EC7063',
          '#5DADE2',
          '#F0B27A',
          '#45B39D',
          '#AF7AC5',
          '#F5F275'
        ]
      }]
    };

    this.setState({
      chartData: childData
    })
    // console.log("the clicked trait is", trait);
    // console.log("subTraitClicked in state is", this.state.subTraitClicked);
    // console.log("---------------");
  }

  render() {
    return (
      <div>
        <Header as='h3' textAlign='center'>
          <Header.Content>
            Your Personality Traits
          </Header.Content>
        </Header>
        {this.state.subTraitClicked === false ? <Radar data={this.state.chartData} /> : <Doughnut data={this.state.chartData}/> }
        <Header as='h5' textAlign='center'>
          <Header.Content>
            Click on one of the below to expand on your personality:
          </Header.Content>
        </Header>
        <Grid.Column>
          <Button.Group basic>
            <Button onClick={e => {this.replaceChart(e)}}>Openness</Button>
            <Button onClick={e => {this.replaceChart(e)}}>Conscientiousness</Button>
            <Button onClick={e => {this.replaceChart(e)}}>Extraversion</Button>
            <Button onClick={e => {this.replaceChart(e)}}>Agreeableness</Button>
            <Button onClick={e => {this.replaceChart(e)}}>Neuroticism</Button>
          </Button.Group>
        </Grid.Column>
      </div>
    )
  }
};

export default PersonalityChart;
