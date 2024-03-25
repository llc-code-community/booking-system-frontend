import { HeaderContainer, Logo, Navbar, LogoText, LogoBeta, NavbarList, NavbarFavorites, NavbarName, NavbarLiteral, } from "./Header.styled";

export const Header = () => {
  return <HeaderContainer>
  <Logo>
      <LogoText>Logo</LogoText>
      <LogoBeta>Beta</LogoBeta>
  </Logo>
  <Navbar>
      <NavbarList>List your property</NavbarList>
      <NavbarFavorites>
          <p>Favorites</p>
      </NavbarFavorites>
      <NavbarName>
          <NavbarLiteral>P</NavbarLiteral>
      </NavbarName>
  </Navbar>
</HeaderContainer>
};
