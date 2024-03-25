import {styled} from "styled-components";

export const HeaderContainer = styled.header`
    justify-content: space-between;
    align-items: center;
    height: 90px;
    display: flex;
    background-color: #fff;
    color: #000;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const Navbar = styled.nav `
    display: flex;
    gap: 24px;
    align-items: center;
`

export const LogoText = styled.p `
    color: #000;
    text-transform: uppercase;
`

export const LogoBeta = styled.p `
    display: flex;
    padding: 2px 4px 3px 4px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 4px;
    color: #fff;
    background: var(--Blue, #2445B8);
`

export const NavbarList = styled.p `
    color: #2445B8;
    font-family: "Helvetica Now Display";
    font-size: 16px;
    border-radius: 36px;
    background: #E9EFFF;

    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const NavbarFavorites = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 16px;
`

export const NavbarName = styled.div `
    display: flex;
    height: 60px;
    padding: 8px 12px;
    align-items: center;
    gap: 12px;

    border-radius: 36px;
    background: rgba(36, 36, 36, 0.03);
`

export const NavbarLiteral = styled.p `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #A0A0A0;
    color: #fff;
`