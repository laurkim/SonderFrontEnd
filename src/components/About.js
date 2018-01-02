import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Grid } from 'semantic-ui-react';

const About = () => {
  return (
    <div align='center'>
      <NavigationBar />
      <Grid>
        <Grid.Row/>
        <Grid.Row>
          <Grid.Column>
            Sonder analyzes your Spotify account to generate your top most played tracks.
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            With that information,
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  )
};

export default About;
