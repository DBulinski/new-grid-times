import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionsList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionsList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 1px;
  background-color: var(--color-gray-300);
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  margin-bottom: 48px;

  @media${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media${QUERIES.laptopAndUp} {
    grid-template-columns: 8fr 6fr 5fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  padding: 24px;
  background-color: var(--color-gray-100);
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  padding: 24px;
  background-color: var(--color-gray-100);
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionsList = styled(StoryList)`
  @media${QUERIES.tabletOnly} {
    gap: 32px;
    flex-direction: row;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  padding: 24px;
  background-color: var(--color-gray-100);
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  padding: 24px;
  background-color: var(--color-gray-100);
`;

export default MainStoryGrid;
