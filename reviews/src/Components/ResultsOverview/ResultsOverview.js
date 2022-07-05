import React from 'react'
import styled from 'styled-components';
import CustomerImagesCarousel from './CustomerImagesCarousel';
import CustomerReviews from './CustomerReviews';
import Features from './Features';
import ProsCons from './ProsCons';
import WouldRecommend from './WouldRecommend';

function ResultsOverview({ reviews }) {
  return (
    <ResultsOverviewContainer>

        <ResultsOverviewTop>
          <CustomerReviews reviews={reviews}/>
          <Features reviews={reviews}/>
          <ProsCons reviews={reviews}/>
        </ResultsOverviewTop>

        <ResultsOverviewBottom>
          <WouldRecommend reviews={reviews}/>
          <CustomerImagesCarousel reviews={reviews}/>
        </ResultsOverviewBottom>

    </ResultsOverviewContainer>
  )
}

export default ResultsOverview;

const ResultsOverviewContainer = styled.div`
  background-color: #f0f2f4;
  height: 368px;
  /* width: 1270px; */
  padding: 17px;
  margin-top: 20px;
`

const ResultsOverviewTop = styled.div`
  display: flex;
`

const ResultsOverviewBottom = styled.div`
  margin-top: 15px;
  display: flex;
`