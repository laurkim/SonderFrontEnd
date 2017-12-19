import React from 'react';
import { Container, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='One Section' />
                  <List link inverted>
                    {/* <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item> */}
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Second Section' />
                  <List link inverted>
                    {/* <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item> */}
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Third Section' />
                  <List link inverted>
                    {/* <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item> */}
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>LoDali analyzes a user's listening habits to provide insight on their personality traits.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Divider inverted section />
            <Image
              centered
              size='mini'
              src='/invertedLogo.png'
            />
            <br/>
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
    </div>
  );
};

export default Footer;
