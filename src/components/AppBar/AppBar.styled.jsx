import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.secondary_background_color};
  box-shadow: 2px 2px 4px 1px #e0e2ff;
  font-size: 24px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 320px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 1280px;
  }
`;
