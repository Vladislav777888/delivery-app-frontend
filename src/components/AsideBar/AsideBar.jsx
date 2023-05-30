import {
  StyledAside,
  StyledList,
  StyledListItem,
  StyledTitle,
  StyledLinkNav,
} from './AsideBar.styled';

const buttons = [
  {
    btn: "McDonald's",
    link: 'muc',
  },
  {
    btn: 'Kfc',
    link: 'kfc',
  },
  {
    btn: 'Japoshka',
    link: 'japoshka',
  },
  {
    btn: 'Mafia',
    link: 'mafia',
  },
  {
    btn: 'Puzata hata',
    link: 'puzatahata',
  },
];

export const AsideBar = () => {
  return (
    <StyledAside>
      <StyledTitle>Shops:</StyledTitle>
      <nav>
        <StyledList>
          {buttons.map((button, index) => (
            <StyledListItem key={index}>
              <StyledLinkNav to={'/' + button.link}>{button.btn}</StyledLinkNav>
            </StyledListItem>
          ))}
        </StyledList>
      </nav>
    </StyledAside>
  );
};
