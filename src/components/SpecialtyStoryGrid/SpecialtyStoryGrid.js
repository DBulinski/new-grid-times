import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories style={{ "--stories-count": SPORTS_STORIES.length }}>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 100%;
  grid-template-areas:
    "market"
    "sports";

  @media${QUERIES.laptopAndUp} {
    background-color: var(--color-gray-300);
    gap: 1px;
    grid-template-columns: 50% 50%;
    grid-template-areas: "market sports";
  }
`;

const MarketsSection = styled.section`
  grid-area: market;
  background-color: var(--color-gray-100);

  @media${QUERIES.laptopAndUp} {
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  grid-area: sports;
  background-color: var(--color-gray-100);

  @media${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media${QUERIES.tabletAndUp} {
    width: 100%;
    grid-template-columns: repeat(var(--stories-count), 200px);
    overflow-x: scroll;
  }
`;

export default SpecialtyStoryGrid;
