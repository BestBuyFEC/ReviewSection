import React from 'react'
import styled from 'styled-components';

function ProsCons() {
  return (
    <ProsConsContainer>
          <Title>Pros Mentioned</Title>
          <h5>Design <span>(2)</span></h5>
          <h5>Ease of use <span>(2)</span></h5>
          <Divider/>
          <Title>Cons Mentioned</Title>
          <h5>Price <span>(1)</span></h5>
    </ProsConsContainer>
  )
}

export default ProsCons;

const ProsConsContainer = styled.div`
     background-color: white;
     height: 208px;
     width: 200px;
     border: 1px solid lightgray;
     border-radius: 4px;
     padding: 20px;
     line-height: 20px;
     h5{
          font-weight: normal;
     }
     span{
          color: blue;
     }
`
const Title = styled.h4`
     font-weight: bold;
     font-size: 13px;
`
const Divider = styled.div`
     border: .5px solid lightgray;
     margin: 15px 0px;
`

