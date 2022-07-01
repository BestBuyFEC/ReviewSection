import React from 'react'
import styled from 'styled-components';

function Features({ reviews }) {
  return (
    <FeaturesContainer>
         <Title>Value</Title>
         <RatingContainer>
               <Rating>5.0</Rating>
               <StarContainer>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
               </StarContainer>
         </RatingContainer>
         <Divider />
         <Title>Quality</Title>
         <RatingContainer>
               <Rating>5.0</Rating>
               <StarContainer>
               <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>               </StarContainer>
         </RatingContainer>
         <Divider />
         <Title>Ease of Use</Title>
         <RatingContainer>
               <Rating>5.0</Rating>
               <StarContainer>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}></Star>               </StarContainer>
         </RatingContainer>
    </FeaturesContainer>
  )
}

export default Features;

const FeaturesContainer = styled.div`
     background-color: white;
     height: 208px;
     width: 275px;
     border: 1px solid lightgray;
     border-radius: 4px;
     margin-right: 15px;
     padding: 20px;
`

const Title = styled.h5`
     font-weight: normal;
     margin-bottom: 5px;
`

const Divider = styled.div`
     border: .5px solid lightgray;
     margin: 15px 0px;
`

const RatingContainer = styled.div`
     display: flex;
`
const Rating = styled.span`
     font-weight: bold;
     margin-right: 5px;
`

const StarContainer = styled.div`

`
const Star = styled.img`
     height: 15px !important;
     width: 15px;
     
`