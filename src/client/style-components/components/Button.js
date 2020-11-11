import styled from 'styled-components';
import { colorBlack, colorWhite, colorDanger, colorPrimary, colorShadow } from '../constants';
import { device } from '../base/mediaQuery';

// For Buttons
export const StyledButton = styled.button`
  background-color: ${(props) => {
    const param = props.type;
    if (param === 'primary') {
      return `${colorPrimary}`;
    } else if (param === 'danger') {
      return `${colorDanger}`;
    } else if (param === 'light') {
      return `${colorShadow}`;
    }
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === 'primary' || param === 'success' || param === 'danger') {
      return `${colorWhite}`;
    } else if (param === 'light') {
      return `${colorBlack}`;
    }
  }};

  padding: ${(props) => {
    if (props.size === 'large') {
      return '1.6rem 5rem';
    } else if (props.size === 'medium') {
      return '1.3rem 3rem';
    } else if (props.size === 'small') {
      return '1rem 1.5rem';
    } else {
      return props.padding;
    }
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  border-radius: ${(props) => {
    return props.borderRadius;
  }};

  font-size: ${(props) => {
    if (props.size === 'large') {
      return '3rem';
    } else if (props.size === 'medium' || props.size === 'small') {
      return '2rem';
    } else {
      return props.fontSize;
    }
  }};

  width: ${(props) => {
    return props.width;
  }};

  z-index: ${(props) => {
    return props.zIndex;
  }};

  position: ${(props) => {
    return props.position;
  }};

  height: ${(props) => {
    return props.height;
  }};

  top: ${(props) => {
    return props.top;
  }};

  left: ${(props) => {
    return props.left;
  }};

  right: ${(props) => {
    return props.right;
  }};

  bottom: ${(props) => {
    return props.bottom;
  }};

  text-decoration: none;
  box-shadow: ${({ theme }) => theme.buttonShadow};
  transition: all 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;

  :hover {
    opacity: 0.9;
  }

  @media ${device.phone} {
    font-size: 2em;
  }

  @media ${device.phone} {
    font-size: 1.5em;
  }
`;

export const StyledButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 0;
`;
