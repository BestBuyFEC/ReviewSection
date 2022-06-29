import React from 'react'
import styled from 'styled-components';

function Features() {
  return (
    <FeaturesContainer>
         <Title>Value</Title>
         <Title>Quality</Title>
         <Title>Ease of Use</Title>
    </FeaturesContainer>
  )
}

export default Features;

const FeaturesContainer = styled.div`
     background-color: white;
     height: 250px;
     width: 280px;
     border: 1px solid lightgray;
     border-radius: 5px;
`

const Title = styled.h5`
     font-weight: normal;
`