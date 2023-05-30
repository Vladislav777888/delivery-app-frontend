import { StyledHeader, Container } from './AppBar.styled';

import { Navigation } from '../Navigation';

export const AppBar = () => {
  return (
    <StyledHeader>
      <Container>
        <Navigation />
      </Container>
    </StyledHeader>
  );
};
