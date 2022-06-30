import React from 'react';
import styled from 'styled-components';

function WouldRecommend() {
  return (
    <WouldRecommendContainer>
        <WouldRecommendInfo>
          <span>100%  </span>would recommend to a friend
        </WouldRecommendInfo>
    </WouldRecommendContainer>
  )
}

export default WouldRecommend;

const WouldRecommendContainer = styled.div`
    display: flex;
    background-color: white;
    height: 106px;
    width: 304px;
    border: 1px solid lightgray;
    border-radius: 4px;
    justify-content: center;
    align-content: center;
    margin-right: 16px;
`
const WouldRecommendInfo = styled.h5`
    margin: auto;
    font-weight: normal;
    font-size: 14px;
    span{
      font-weight: bold;
      font-size: 17px;
    }
`