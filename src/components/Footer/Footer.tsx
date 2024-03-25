import {FooterContainer, FooterLogo, FooterYear, Connect, ConnectName, ConnectList, InformationName, InformationList} from './Footer.styled'

export const Footer = () => {
  return <FooterContainer>
  <div>
      <FooterLogo>Logo</FooterLogo>
      <FooterYear>@2024 Logo</FooterYear>
  </div>
  <Connect>
      <ConnectName>Connect</ConnectName>
      <ul>
          <ConnectList>
              <a href="/">Instagram</a>
          </ConnectList>
          <ConnectList>
              <a href="/">Linkedln</a>
          </ConnectList>
          <ConnectList>
              <a href="/">Facebook</a>
          </ConnectList>
      </ul>
  </Connect>
  <div>
      <InformationName>Information</InformationName>
      <ul>
          <InformationList>
              <a href="/">How it works</a>
          </InformationList>
          <InformationList>
              <a href="/">Support</a>
          </InformationList>
      </ul>
  </div>
</FooterContainer>
};