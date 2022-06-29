import React from 'react'
import styled from 'styled-components';

function CustomerReviews() {
  return (
    <CustomerReviewsContainer>
         <Title>Customer Reviews</Title>
    </CustomerReviewsContainer>
  )
}

export default CustomerReviews;

const CustomerReviewsContainer = styled.div`
     background-color: white;
     width: 450px;
     height: 250px;
     border: 1px solid lightgray;
     border-radius: 5px;
`
const Title = styled.h5`
     font-weight: normal;
`