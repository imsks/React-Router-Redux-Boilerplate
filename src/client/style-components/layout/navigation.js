import styled from "styled-components";
import { colorWhite, colorPrimary } from "../constants";
import { device } from "../base/mediaQuery";
// Top Navbar
export const NavbarHead = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem 0px;
  z-index: 1;
  background: ${({ theme }) => theme.body};

  @media ${device.phone} {
    justify-content: space-between;
  }
`;

export const Logo = styled.a`
  color: ${colorPrimary};
  text-decoration: none !important;
  font-size: 2.5rem;
  font-weight: 600;
  transition: 0.3s all;

  display: flex;
  justify-content: center;
  align-items: baseline;

  margin: ${(props) => {
    return props.margin;
  }};

  @media ${device.phone} {
    margin: 1rem 0 0 10%;
  }
`;

export const LogoDot = styled.span`
  color: ${({ theme }) => theme.text};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: block;
  margin: 0 0 0 0.3rem;
  background-color: ${colorPrimary};
`;

export const CreateBlogActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => {
    return props.padding;
  }};
`;

export const WrapNavButtons = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
