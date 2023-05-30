import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAside = styled.aside`
  text-align: center;
  flex-direction: column;
  border: 3px solid ${p => p.theme.colors.grey};
  padding: 20px 40px;
  width: 250px;
  height: 550px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledListItem = styled.li`
  & + & {
    padding-top: 40px;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 50px;
`;

export const StyledLinkNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  padding: 10px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${p => p.theme.colors.main_text_color};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondary_background_color};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent_color};
    color: ${p => p.theme.colors.text_color_white};
  }

  &.active {
    background-color: ${p => p.theme.colors.accent_color};
    color: ${p => p.theme.colors.text_color_white};
  }
`;

// export const StyledButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-width: 110px;
//   padding: 10px;
//   cursor: pointer;
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   border-radius: ${p => p.theme.radii.normal};

//   :hover,
//   :focus {
//     background-color: ${p => p.theme.colors.accent_color};
//     color: ${p => p.theme.colors.text_color_white};
//   }
// `;
