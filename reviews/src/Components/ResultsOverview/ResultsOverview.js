import React from 'react'
import styled from 'styled-components';
import CustomerImagesCarousel from './CustomerImagesCarousel';
import CustomerReviews from './CustomerReviews';
import Features from './Features';
import ProsCons from './ProsCons';
import WouldRecommend from './WouldRecommend';

function ResultsOverview() {
  return (
    <ResultsOverviewContainer>

        <ResultsOverviewTop>
          <CustomerReviews />
          <Features />
          <ProsCons />
        </ResultsOverviewTop>

        <ResultsOverviewBottom>
          <WouldRecommend />
          <CustomerImagesCarousel />
        </ResultsOverviewBottom>

    </ResultsOverviewContainer>
  )
}

export default ResultsOverview;

const ResultsOverviewContainer = styled.div`
  background-color: #f0f2f4;
  height: 410px;
  width: 1050px;
  padding: 20px;
`

const ResultsOverviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const ResultsOverviewBottom = styled.div`
  display: flex;
`