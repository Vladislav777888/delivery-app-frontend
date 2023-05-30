import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLinkNav = styled(NavLink)`
  display: block;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px 0;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent_color};
  }

  &.active {
    position: relative;

    &::after {
      position: absolute;
      bottom: 17px;

      display: block;
      width: 100%;
      height: 3px;
      background-color: ${p => p.theme.colors.text_color_error};
      content: '';
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListItem = styled.li`
  & + & {
    padding-left: 60px;
  }
`;
