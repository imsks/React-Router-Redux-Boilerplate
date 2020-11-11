import styled from "styled-components";
import {
  colorBlack,
  colorShadow,
  colorPrimary,
  colorWhite,
  colorCardBackground,
} from "../constants";
import { HeadingPrimary, Paragraph } from "../base/typography";
import { device } from "../base/mediaQuery";

export const QuickNavigationModalContainer = styled.div`
  padding: ${(props) => {
    return props.padding;
  }};

  @media ${device.phone} {
    padding: 0rem;
  }
`;

export const QuickNavigationModalCard = styled.div`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 2rem auto;
  align-self: baseline;
  background-color: ${colorCardBackground};
  box-shadow: 2px 2px 15px rgba(${colorShadow}, 0.2);
  border-radius: 5px;
  transition: 0.3s all;

  :hover {
    background-color: ${colorPrimary};
  }
`;

export const QuickNavigationModalCardItem = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 500;
  color: ${colorBlack};
  margin: 0 10%;

  :hover {
    color: ${colorWhite};
  }
`;

export const VentureCardGroup = styled.div`
  text-decoration: none;
  width: 100%;
  display: grid;
  gap: 3rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
  font-size: 2rem;
  font-weight: 500;
  color: ${colorBlack};

  :hover {
    color: ${colorWhite};
  }
`;

export const VentureCard = styled.div`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  background-color: ${colorCardBackground};
  border-radius: 5px;
  color: ${colorBlack};
  box-shadow: 2px 2px 15px rgba(${colorShadow}, 0.2);
  transition: 0.5s all;

  :hover {
    color: ${colorWhite};
    box-shadow: 4px 4px 15px rgba(${colorShadow}, 0.2);
  }
`;

export const VentureCardContent = styled.div`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colorCardBackground};
  border-radius: 5px;
  color: ${colorBlack};

  :hover {
    color: ${colorWhite};
  }
`;

export const SkillCardGroup = styled.div`
  width: auto;
  display: grid;
  gap: 3rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  font-size: 2rem;
  font-weight: 500;
  color: ${colorBlack};

  :hover {
    color: ${colorWhite};
  }

  a {
    text-decoration: none;
  }

  @media ${device.phone} {
    margin: 2rem -2rem;
  }
`;

export const SkillCard = styled.div`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  background-color: ${colorCardBackground};
  border-radius: 5px;
  color: ${colorBlack};
  box-shadow: 2px 2px 15px rgba(${colorShadow}, 0.2);
  transition: 0.5s all;

  :hover {
    color: ${colorWhite};
    box-shadow: 5px 5px 20px rgba(${colorShadow}, 0.3);
  }
`;

export const SkillCardContent = styled.div`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colorCardBackground};
  border-radius: 5px;
  color: ${colorBlack};

  :hover {
    color: ${colorWhite};
  }
`;

export const SkillCardMetaContent = styled.div`
  text-decoration: none;
  width: 100%;
  padding: 2rem 0;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colorPrimary};
  border-radius: 5px;
  color: ${colorWhite};
  transition: 0.5s all;

  :hover {
    box-shadow: 5px 5px 20px rgba(${colorShadow}, 0.3);
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 3rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
  padding: 5rem;
  background-color: ${colorCardBackground};
  border-radius: 5px;
  color: ${colorBlack};
  box-shadow: 2px 2px 15px rgba(${colorShadow}, 0.2);
  transition: 0.5s all;

  :hover {
    box-shadow: 5px 5px 20px rgba(${colorShadow}, 0.3);
  }
`;

export const ConnectCardGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 2rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media ${device.phone} {
    gap: 0rem;
  }
`;

export const ConnectCardItem = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  background-color: ${colorCardBackground};
  border-radius: 5px;
  color: ${colorBlack};
  box-shadow: 2px 2px 15px rgba(${colorShadow}, 0.1);
  transition: 0.5s all;
`;
