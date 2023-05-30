import {
  StyledList,
  StyledListItem,
  StyledLogo,
  StyledArticle,
  StyledImg,
  StyledTitle,
  StyledText,
  Box,
  StyledButton,
  StyledLink,
} from './AllProductsList.styled';

export const AllProductsList = ({ products, onClick }) => {
  return (
    <StyledList>
      {products.map(({ _id, imgUrl, logoUrl, price, title, shop }) => (
        <StyledListItem key={_id}>
          <StyledArticle>
            <StyledImg src={imgUrl} alt={title} loading="lazy" />
            <StyledTitle>{title}</StyledTitle>
            <StyledText>Price: {price}₴</StyledText>
            <Box>
              {shop === 'muc' && (
                <StyledLink
                  href="https://www.mcdonalds.com/ua/uk-ua.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLogo src={logoUrl} alt={shop} />
                </StyledLink>
              )}
              {shop === 'kfc' && (
                <StyledLink
                  href="https://www.kfc-ukraine.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLogo src={logoUrl} alt={shop} />
                </StyledLink>
              )}
              {shop === 'mafia' && (
                <StyledLink
                  href="https://mafia.ua/ua/kharkov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLogo src={logoUrl} alt={shop} />
                </StyledLink>
              )}
              {shop === 'japoshka' && (
                <StyledLink
                  href="https://yaposhka.com.ua/ua/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLogo src={logoUrl} alt={shop} />
                </StyledLink>
              )}
              {shop === 'puzatahata' && (
                <StyledLink
                  href="https://puzatahata.ua/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLogo src={logoUrl} alt={shop} />
                </StyledLink>
              )}

              <StyledButton type="button" onClick={() => onClick(_id)}>
                Add to Cart
              </StyledButton>
            </Box>
          </StyledArticle>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
