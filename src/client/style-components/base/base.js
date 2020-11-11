import styled from "styled-components"
import { colorPrimary } from "../constants"

export const Loading = styled.div`
  margin: ${props => {
    if (props.margin) {
      return props.margin
    } else {
      return "50vh 50vw"
    }
  }};

  width: 50px;
  height: 50px;
  border: 5px solid ${colorPrimary};
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => {
    return props.padding
  }};

  margin: ${props => {
    return props.margin;
  }};

  width: ${props => {
    return props.width;
  }};

  height: ${props => {
    return props.height;
  }};
`

export const PageContainer = styled.main`
  margin: ${props => {
    return props.margin;
  }};
`

