import React from 'react';
import { Container, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em'}}
        >


          <Image
            centered
            size='mini'
            src='/invertedLogo.png'
          />
        </Segment>
      </div>
  );
};

export default Footer;
