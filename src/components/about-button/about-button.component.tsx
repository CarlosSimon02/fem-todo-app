import { useLocation, useNavigate } from 'react-router-dom';

import HeaderIconButton from '../header-icon-button/header-icon-button.component';
import { AboutIcon } from './about-button.styles';

const AboutButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tapHandler = () => {
    if ('/about' !== location.pathname) navigate('/about');
  };

  return (
    <HeaderIconButton label="About" tapHandler={tapHandler}>
      <AboutIcon />
    </HeaderIconButton>
  );
};

export default AboutButton;
