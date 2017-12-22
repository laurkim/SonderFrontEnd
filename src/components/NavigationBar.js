import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from "../actions/index";
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button } from 'semantic-ui-react';
import LogOut from './LogOut';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Menu position='top' inverted>
          <Container>
            <Menu.Item header>
              <Image
                size='mini'
                src='/invertedLogo.png'
                style={{ marginRight: '1.5em' }}
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
              <Button color='blue' as='a'>{this.props.currentUser.display_name}</Button>
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
