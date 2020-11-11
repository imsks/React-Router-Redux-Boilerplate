import styled from 'styled-components';
import { device } from './mediaQuery';
import { colorPrimary, colorWhite, colorBlack, fontGlobal, colorGrey } from '../constants';

export const MainHeading = styled.h1`
  display: block;
  text-decoration: none;
  transition: 0.3s all;
  overflow: hidden;

  font-family: ${fontGlobal} !important;

  margin: ${(props) => {
    return props.margin !== undefined ? props.margin : '2rem 0 1rem 0';
  }};

  height: ${(props) => {
    return props.height;
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === 'main') {
      return `${colorPrimary}`;
    } else if (param === 'sub') {
      return `${colorWhite}`;
    } else {
      return `${colorGrey}`;
    }
  }};

  line-height: 135%;

  font-size: ${(props) => {
    return props.fontSize !== undefined ? props.fontSize : '4rem';
  }};

  font-weight: ${(props) => {
    return props.fontWeight !== undefined ? props.fontWeight : '500';
  }};

  text-align: ${(props) => {
    return props.align;
  }};

  @media ${device.tabPort} {
    font-size: 5em;
  }

  @media ${device.phone} {
    font-size: 4rem;
    line-height: 100%;
  }
`;

export const MainSubheading = styled.h2`
  display: block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  width: ${(props) => {
    return props.width;
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === 'main') {
      return `${colorPrimary}`;
    } else if (param === 'secondary') {
      return `${colorBlack}`;
    } else if (param === 'sub') {
      return `${colorWhite}`;
    } else {
      return `${colorGrey}`;
    }
  }};

  font-size: ${(props) => {
    return props.fontSize !== undefined ? props.fontSize : '6rem';
  }};

  font-weight: ${(props) => {
    return props.fontWeight !== undefined ? props.fontWeight : '400';
  }};

  @media ${device.tabPort} {
    font-size: 4rem;
  }

  @media ${device.phone} {
    font-size: 3rem;
    font-weight: 600;
  }
`;

export const SecondaryHeading = styled.h3`
  display: block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  width: ${(props) => {
    return props.width;
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === 'main') {
      return `${colorPrimary}`;
    } else if (param === 'sub') {
      return `${colorWhite}`;
    } else {
      return `${colorGrey}`;
    }
  }};

  font-size: ${(props) => {
    return props.fontSize !== undefined ? props.fontSize : '4rem';
  }};

  font-weight: ${(props) => {
    return props.fontWeight !== undefined ? props.fontWeight : '400';
  }};

  @media ${device.tabPort} {
    font-size: 3rem;
  }

  @media ${device.phone} {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export const SecondarySubheading = styled.h4`
  display: block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  width: ${(props) => {
    return props.width;
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === 'main') {
      return `${colorPrimary}`;
    } else if (param === 'secondary') {
      return `${colorBlack}`;
    } else {
      return `${colorGrey}`;
    }
  }};

  font-size: ${(props) => {
    return props.fontSize !== undefined ? props.fontSize : '3rem';
  }};

  font-weight: ${(props) => {
    return props.fontWeight !== undefined ? props.fontWeight : '400';
  }};

  @media ${device.tabPort} {
    font-size: 2rem;
  }

  @media ${device.phone} {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  display: inline-block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  color: ${(props) => {
    const param = props.type;
    if (param === 'main') {
      return `${colorPrimary}`;
    } else if (param === 'sub') {
      return `${colorWhite}`;
    } else {
      return `${colorGrey}`;
    }
  }};

  font-size: ${(props) => {
    return props.fontSize;
  }};

  @media ${device.tabLand} {
    font-size: 2.5rem;
  }

  @media ${device.tabPort} {
    font-size: 2em;
  }
`;
