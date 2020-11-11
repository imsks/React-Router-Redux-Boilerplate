import styled from 'styled-components';
import { colorPrimary, colorShadow, colorCardBackground } from '../constants';
import { device } from '../base/mediaQuery';

export const PageContainer = styled.main`
  margin: 10rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomepageContainer = styled.main`
  margin: 10rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PageContentBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  height: 100%;
  width: 50%;

  @media ${device.tabPort} {
    width: 60%;
  }

  @media ${device.phone} {
    width: 70%;
  }

  @media ${device.smallPhone} {
    width: 80%;
  }
`;

export const PrimaryContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
`;

export const PrimarySectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  margin: ${(props) => {
    return props.margin;
  }};
`;

export const PrimaryTextContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  margin: ${(props) => {
    return props.margin;
  }};
`;

export const PrimaryImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  margin: ${(props) => {
    return props.margin;
  }};
`;

export const PrimaryImagesGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  margin: ${(props) => {
    return props.margin;
  }};

  @media ${device.phone} {
    margin: 0 -2rem;
  }
`;

export const ImageContainer = styled.img`
  display: block;
  width: 100%;
  height: auto;

  margin: ${(props) => {
    return props.margin;
  }};

  @media ${device.tabLand} {
    width: 90%;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background-color: ${colorCardBackground};
  box-shadow: 2px 2px 15px rgba(${colorShadow}, 0.1);
`;

export const SocialConnectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: ${colorCardBackground};
  width: 100%;
  border-radius: 5px;
  padding: 3rem 0 2rem 0;
`;

export const SocialLinksContainer = styled.div`
  width: 70%;
  display: grid;
  gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
`;

export const SocialLinksContainerItem = styled.a`
  font-size: 3rem;
  color: ${colorPrimary};
  :not(:first-child) {
    margin: 0 0 0 1rem;
  }
`;

export const CreditsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: ${colorCardBackground};
  width: 100%;
  border-radius: 5px;
  padding: 2rem 0 3rem 0;
`;
