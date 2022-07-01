import React, { useState } from 'react'
import styled from 'styled-components';

function CustomerImagesCarousel({ reviews }) {

  let [transform, setTransform] = useState("translateX(0)");
  let [count, setCount] = useState(0);

  const moveRight = (e) => {
    if (count > -1400) {
       count += -50;
    }
    setTransform(`translateX(${count}px)`);
 };

 const moveLeft = (e) => {
    if (count < 0) {
       count += 50;
    }
    setTransform(`translateX(${count}px)`);
 };

  
  return (
    <CarouselContainer>
      <PreviousBtn onClick={moveLeft}>&lt;</PreviousBtn>
      <Slider>
        <InnerSlider style={{transform: `${transform}`}}>
        {reviews.map((elem) => (
          elem.image.map((image) => 
          <CustomerImage src={image}></CustomerImage>
          )
      ))}
        </InnerSlider>
      </Slider>
      <NextBtn onClick={moveRight}>&gt;</NextBtn>
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
  width: 90px !important;
  margin: 0px 7px;
  :hover{
    cursor: pointer;
    border: 1px solid blue;
  }
`

const Slider = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 106px;
  width: 498px;
`

const InnerSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 106px;
  width: 498px;
`

const PreviousBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 100px !important;
  :hover{
    cursor: pointer;
  }
`

const NextBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 100px !important;
  :hover{
    cursor: pointer;
  }
`