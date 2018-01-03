import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/index";
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button, Label } from 'semantic-ui-react';
import LogOut from './LogOut';

class NavigationBar extends Component {
  renderUserButton = () => {
    return (
      <Button inverted as='a' href={this.props.currentUser.spotify_url} target="_blank">{this.props.currentUser.display_name}</Button>
    );
  }

  renderUserImage = () => {
    const profilePicURL = this.props.currentUser.profile_img_url;
    return (
      <Image src={profilePicURL} avatar />
    )
  }

  render() {
    return (
      <div>
        <Menu position='top' inverted>
          <Container>
            <Menu.Item header>
              <Image
                size='mini'
                src='/invertedLogo.png'
                style={{
                  marginRight: '1.5em'
                }}
              />
              Sonder
            </Menu.Item>
            <Menu.Item>
              <Link to='/home'>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/about'>
              About
            </Link>
          </Menu.Item>

          {/* right side of fixed nav bar */}
          <Menu.Menu position='right'>
            <Menu.Item>
              {this.props.currentUser.id ? this.renderUserImage() : null}
            </Menu.Item>
            <Menu.Item>
              {this.props.currentUser.id ? this.renderUserButton() : null}
            </Menu.Item>
            <Menu.Item>
              <LogOut />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
};
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(NavigationBar);
