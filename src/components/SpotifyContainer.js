import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/fetchUser";
import LogOut from './LogOut';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react'

class SpotifyContainer extends Component {
  componentDidMount() {
    // console.log("inside base component");
  }

  render() {
    return (
      <div>
        {/* left side of fixed nav bar */}
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src='/invertedLogo.png'
                style={{ marginRight: '1.5em' }}
              />
              Differentia
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item href='//google.com' target='_blank'>About</Menu.Item>

            {/* right side of fixed nav bar */}
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button color='blue' as='a'>{this.props.currentUser.display_name}</Button>
              </Menu.Item>
              <Menu.Item>
                <LogOut />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>

        {/* body */}
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Main body</Header>
          <p>blah blah</p>
        </Container>

        {/* footer */}
        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          >
            <Container textAlign='center'>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 1' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 2' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Group 3' />
                    <List link inverted>
                      <List.Item as='a'>Link One</List.Item>
                      <List.Item as='a'>Link Two</List.Item>
                      <List.Item as='a'>Link Three</List.Item>
                      <List.Item as='a'>Link Four</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Footer Header' />
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
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
    )
  }
}

function mapStateToProps(state) {
  // console.log("the current state is", state);
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(SpotifyContainer);
