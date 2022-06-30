import React from 'react'
import styled from 'styled-components';

function CustomerImagesCarousel({ reviews }) {
  return (
    <CarouselContainer>
      {reviews.map((pic) => (
        <CustomerImage src={pic.image}></CustomerImage>
      ))}
    </CarouselContainer>
  )
}

export default CustomerImagesCarousel;

const CarouselContainer = styled.div`
    display: flex;
    background-color: white;
    height: 106px;
    width: 498px;
    border: 1px solid lightgray;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`

const CustomerImage = styled.img`
  height: 90px !important;
  width: 90px;
  margin: 0px 10px;
  :hover{
    cursor: pointer;
    border: 1px solid blue;
  }
`