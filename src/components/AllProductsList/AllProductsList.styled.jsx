import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 16px;
  gap: 20px;
  /* width: 1143px; */
`;

export const StyledListItem = styled.li`
  flex-basis: calc((100% - 40px) / 3);
  border: 3px solid ${p => p.theme.colors.grey};
  border-radius: 15px;
  background-color: ${p => p.theme.colors.secondary_background_color};

  overflow: hidden;
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: 50px;
`;

export const StyledArticle = styled.article`
  height: 100%;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 250px;
`;

export const StyledTitle = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

export const StyledText = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  padding: 10px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent_color};
    color: ${p => p.theme.colors.text_color_white};
  }
`;

export const StyledLink = styled.a`
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
