import Button from '../common/Button';
import Container from '../common/Container';
import { Content, Heading, SmallText, Text, Wrapper } from './Hero.style';

const Hero = ({ setFormVisible }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Heading>Welcome to Find your car App!</Heading>
          <Text>
            This app allows you to find your car in a 6 simple steps. Are you ready? Let's start!
          </Text>
          <SmallText>
            *At the moment our car base is pretty small and we only support search for two cars -
            BMW 3er model and Ford Fiesta and C-Max models.
          </SmallText>
          <Button singleBtn onClick={() => setFormVisible(true)}>Start</Button>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Hero;
