import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Segment, Container, Header, Divider, Grid, Image } from 'semantic-ui-react';

const sonderDefinition = "n. The profound feeling of realizing that everyone, including strangers passed in the street, has a life as complex as one's own, which they are constantly living despite one's personal lack of awareness of it.";
const sonderDescription = "Sonder analyzes your listening habits based off your Spotify account. It provides information for the audio features for each of your top tracks such as the happiness and energy of the song. Based on your tracks, Sonder creates an analysis that provides your score for how prominent each of the Big Five personality traits are for you."
const bigFiveDescription = "The Big Five personality traits are: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism."
const openness = "Openness demonstrates an appreciation for art, emotion, adventure, unusual ideas, curiosity, and variety of experience. Openness reflects the degree of intellectual curiosity, creativity and a preference for novelty and variety a person has. It is also described as the extent to which a person is imaginative or independent and depicts a personal preference for a variety of activities over a strict routine. High openness can be perceived as unpredictability or lack of focus, and more likely to engage in risky behaviour or drug taking.";
const opennessContinued = "Moreover, individuals with high openness are said to pursue self-actualization specifically by seeking out intense, euphoric experiences. Conversely, those with low openness seek to gain fulfillment through perseverance and are characterized as pragmatic and data-driven—sometimes even perceived to be dogmatic and closed-minded. Some disagreement remains about how to interpret and contextualize the openness factor.";
const conscientiousness = "Conscientiousness demonstrates a tendency to be organized and dependable, show self-discipline, act dutifully, aim for achievement, and prefer planned rather than spontaneous behavior. High conscientiousness is often perceived as stubbornness and obsession. Low conscientiousness is associated with flexibility and spontaneity, but can also appear as sloppiness and lack of reliability.";
const extraversion = "Extraversion has characteristics of energy, positive emotions, surgency, assertiveness, sociability and the tendency to seek stimulation in the company of others, and talkativeness. High extraversion is often perceived as attention-seeking, and domineering. Low extraversion causes a reserved, reflective personality, which can be perceived as aloof or self-absorbed.";
const agreeableness = "Agreeableness demonstrates a tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others. It is also a measure of one's trusting and helpful nature, and whether a person is generally well-tempered or not. High agreeableness is often seen as naive or submissive. Low agreeableness personalities are often competitive or challenging people, which can be seen as argumentativeness or untrustworthiness.";
const neuroticism = "Neuroticism is the tendency to experience unpleasant emotions easily, such as anger, anxiety, depression, and vulnerability. Neuroticism also refers to the degree of emotional stability and impulse control and is sometimes referred to by its low pole, 'emotional stability'. A high need for stability manifests itself as a stable and calm personality, but can be seen as uninspiring and unconcerned. A low need for stability causes a reactive and excitable personality, often very dynamic individuals, but they can be perceived as unstable or insecure.";
const openingImageURL = "https://i.pinimg.com/originals/00/9f/4b/009f4be35a9056f563e91c7f5791dcea.jpg";

const About = () => {
  return (
    <div align='center'>
      <NavigationBar />
      <Segment
        compact
        style={{
          marginTop: "20px",
          minHeight: "900px",
          minWidth: "1000px",
          backgroundImage: `url(${openingImageURL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={12}>
              <Header
                style={{
                  fontFamily: "Josefin Sans",
                  fontSize: "50px",
                  fontWeight: "bold",
                  marginTop: "8px"
                }}
                >
                  son·der
                </Header>
                <Header
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: "25px",
                    fontWeight: "light",
                    fontStyle: "italic",
                    marginTop: "8px",
                    marginBottom: "0px"
                  }}
                  >
                    {sonderDefinition}
                  </Header>
                  <Divider section />
                  <Header
                    style={{
                      fontFamily: "Josefin Sans",
                      fontSize: "25px",
                      fontWeight: "light",
                      marginTop: "15px",
                      marginBottom: "20px"
                    }}
                    >
                      {sonderDescription}
                      <br />
                      <br />
                      {bigFiveDescription}
                    </Header>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column
            width={8}
            style={{
              marginTop: "30px",
              marginBottom: "20px"
            }}>
            <Header
              style={{
                fontFamily: "Josefin Sans",
                fontSize: "25px",
                fontWeight: "light",
                textAlign: "left",
                marginTop: "15px"
              }}
              >
                {openness}
                <br />
                <br />
                {opennessContinued}
                <br />
                <br />
                {conscientiousness}
              </Header>
            </Grid.Column>
            <Grid.Column
              width={4}
              style={{
                marginTop: "30px",
                marginBottom: "20px"
              }}>
            <Image
              bordered
              rounded
              src="https://i.pinimg.com/564x/57/b1/63/57b163f6bc2322e050547fbf17ad72d0.jpg"
            />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column
            width={4}
            style={{
              marginTop: "30px",
              marginBottom: "20px"
            }}>
            <Image
              bordered
              rounded
              src="https://i.pinimg.com/564x/93/6e/b3/936eb3f627445fdd1b765a79e54d73ef.jpg"
              size="large"
            />
          </Grid.Column>
          <Grid.Column
            width={8}
            style={{
              marginTop: "30px",
              marginBottom: "20px"
            }}>
            <Header
              style={{
                fontFamily: "Josefin Sans",
                fontSize: "25px",
                fontWeight: "light",
                textAlign: "left",
                marginTop: "15px"
              }}
              >
                {agreeableness}
                <br />
                <br />
                {neuroticism}
                <br />
                <br />
                {extraversion}
              </Header>
            </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  )
};

export default About;
