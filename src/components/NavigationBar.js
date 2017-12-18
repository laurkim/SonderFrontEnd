import React from 'react';
import { Container, Image, Menu, Button } from 'semantic-ui-react';
import LogOut from './LogOut';

const NavigationBar = props => {
  return (
    <div>
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
              <Button color='blue' as='a'>{props.currentUser}</Button>
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

export default NavigationBar;
