import React from 'react';
import { Image, Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const backgroundURL = "https://images.unsplash.com/photo-1495369470453-f6af4ade471b?auto=format&fit=crop&w=1950&q=80";

const Login = () => {
  return (
    <div>
      <Segment
        textAlign="center"
        vertical
        style={{
          minHeight: "1090px",
          backgroundImage: `url(${backgroundURL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
      <Container text>
        <Header
          content="SONDER"
          inverted
          style={{
            fontFamily: "Josefin Sans",
            fontSize: "95px",
            fontWeight: "light",
            marginBottom: "0px",
            marginTop: "50px"
            }}
          />
          <Button
            animated
            // basic
            color="grey"
            inverted
            size="huge"
            href='http://localhost:3000/api/v1/login'
            style={{
              marginTop: "15px"
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
    </div>
  );
};

export default Login;
