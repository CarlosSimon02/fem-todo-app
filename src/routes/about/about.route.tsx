import { useNavigate } from 'react-router-dom';

import bgCoderHeroImage from '../../assets/coder-hero.jpg';
import bgDesignerHeroImage from '../../assets/designer-hero.png';
import {
  StyledAboutContainer,
  StyledBackButton,
  StyledBackIcon,
  StyledCard,
  StyledGithubIcon,
  StyledIconContainer,
  StyledImage,
  StyledInfoContainer,
  StyledLabel,
  StyledLinkIcon,
  StyledNoun,
} from './about.styles';

const coderInfo: CardProps = {
  image: bgCoderHeroImage,
  label: 'Coded by:',
  noun: 'Carlos Simon M. Camacho',
  link: 'https://github.com/CarlosSimon02',
  linkIcon: <StyledGithubIcon />,
};

const designerInfo: CardProps = {
  image: bgDesignerHeroImage,
  label: 'Challenge by:',
  noun: 'Frontend Mentor',
  link: 'https://www.frontendmentor.io',
  linkIcon: <StyledLinkIcon />,
};

type CardProps = {
  image: string;
  label: string;
  noun: string;
  link: string;
  linkIcon: JSX.Element;
};

const Card = ({ image, label, noun, link, linkIcon }: CardProps) => {
  return (
    <StyledCard>
      <StyledImage style={{ backgroundImage: `url(${image})` }} />
      <StyledInfoContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledNoun>{noun}</StyledNoun>
        <StyledIconContainer>
          {linkIcon}
          <a href={link}>{link}</a>
        </StyledIconContainer>
      </StyledInfoContainer>
    </StyledCard>
  );
};

const About = () => {
  const navigate = useNavigate();

  const onBackHandler = () => {
    navigate('/');
  };

  return (
    <StyledAboutContainer>
      <StyledBackButton onClick={onBackHandler}>
        <StyledBackIcon />
        Back
      </StyledBackButton>
      <Card {...coderInfo} />
      <Card {...designerInfo} />
    </StyledAboutContainer>
  );
};

export default About;
