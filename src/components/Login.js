import React from 'react';
import { Image, Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const Login = () => {
  return (
    <div>
      <Segment
        textAlign="center"
        vertical
        style={{
          minHeight: 900,
          backgroundImage: "url(https://media.giphy.com/media/wR3yklvpBIgzS/giphy.gif)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
          <Container text>
            <Header
              // as="h1"
              content="SONDER"
              inverted
              style={{
                fontFamily: "Josefin Sans",
                fontSize: "75px",
                fontWeight: "light",
                marginBottom: 0,
                marginTop: "8px"
              }}
            />
        </Container>
        <Container >
          <Button
            animated
            basic
            inverted
            color="white"
            size="large"
            href='http://localhost:3000/api/v1/login'
            style={{
              marginTop: "575px"
            }}>
            <Button.Content
              visible
              content="LOG IN"
              style={{
                fontFamily: "Josefin Sans",
                fontWeight: "light",
                marginTop: "4px"
              }}
            />
            <Button.Content hidden>
              <Icon name='send' />
            </Button.Content>
          </Button>
        </Container>
      </Segment>
      {/* <div id="login-button"> */}
    {/* </div> */}
    </div>
  );

};

export default Login;
