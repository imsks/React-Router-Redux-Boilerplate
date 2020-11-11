import React from 'react';
import { HomepageContainer, PageContentBox } from '../style-components/components/Containers';
import { MainHeading, SecondarySubheading, Paragraph } from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';

import HeroData from '../Data/homepage.data.json';

const HomePage = () => {
  const { data } = HeroData;

  return (
    <HomepageContainer>
      <PageContentBox>
        <MainHeading type="main">{data.heading}</MainHeading>
        <SecondarySubheading>{data.subheading}</SecondarySubheading>
        <a href="https://github.com/imsks/React-Router-SSR-Boilerplate">
          <StyledButton size="large" margin="4rem 0 1rem 0" type="primary">
            {data.cta_text}
          </StyledButton>
        </a>
      </PageContentBox>
    </HomepageContainer>
  );
};

export default {
  component: HomePage,
};
