import { HeaderContainer, Logo, Navbar, LogoText, LogoBeta, NavbarList, NavbarFavorites, NavbarName, NavbarLiteral, } from "./Header.styled";
import heartIcon from '../../assets/icons/heartIcon.svg'
import downIcon from '../../assets/icons/downIcon.svg'

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
          <img src={heartIcon} alt="heart" />
      </NavbarFavorites>
      <NavbarName>
          <NavbarLiteral>P</NavbarLiteral>
          <img src={downIcon} alt="down arrow" />
      </NavbarName>
  </Navbar>
</HeaderContainer>
};
