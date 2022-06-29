import React from 'react'
import styled from 'styled-components';

function ProsCons() {
  return (
    <ProsConsContainer>
          <Title>Pros Mentioned</Title>
         <Title>Cons Mentioned</Title>
    </ProsConsContainer>
  )
}

export default ProsCons;

const ProsConsContainer = styled.div`
     background-color: white;
     height: 250px;
     width: 240px;
     border: 1px solid lightgray;
     border-radius: 5px;
`
const Title = styled.h5`
     font-weight: normal;
`