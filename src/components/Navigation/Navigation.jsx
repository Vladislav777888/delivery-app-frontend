import { StyledLinkNav, StyledList, StyledListItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledList>
        <StyledListItem>
          <StyledLinkNav to={'/'}>Shop</StyledLinkNav>
        </StyledListItem>
        <StyledListItem>
          <StyledLinkNav to={'/carts'}>Shopping Cart</StyledLinkNav>
        </StyledListItem>
        <StyledListItem>
          <StyledLinkNav to={'/ordersHistory'}>History</StyledLinkNav>
        </StyledListItem>
      </StyledList>
    </nav>
  );
};
