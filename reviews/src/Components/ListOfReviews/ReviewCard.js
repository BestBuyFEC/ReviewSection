import React from 'react'
import styled from 'styled-components';

function ReviewCard({name, title, rating, review_body, recommend, value, quality, easeOfUse, image, cons, pros}) {
  
     function wouldRecommend(){
          if(recommend === true){
               return(
                    <div className='wouldRecommend'>
                         <CheckMark src='https://image.pngaaa.com/61/463061-small.png'></CheckMark>
                         I would recommend this to a friend     
                    </div>
               )
          } else {
               return(
               <div>
                    <XMark src='https://flyclipart.com/thumb2/red-cross-mark-png-transparent-red-cross-mark-images-227338.png'></XMark>
                    I would not recommend this to a friend
               </div>
               )
          }
     }

     function prosMentioned(){
          if(pros !== null){
               return(
                    <div className='pros'>Pros Mentioned: <span>{pros}</span></div>
               )
          }
     }

     function consMentioned(){
          if(cons !== null){
               return(
                    <div className='cons'>Cons Mentioned: <span>{cons}</span></div>
               )
          }
     }

     function imageMap(){
          if(image.length > 0){
               return(
                    image.map(image => <img className='mappedImages' src={image} alt=''></img>) 
               )
          }
     }

     function calcRating(){
          if(rating > 0){
            return(
              Array(Math.floor(rating))
              .fill()
              .map(rating => <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>)
            )
          } else {
            return 'No User Ratings';
          }
        }

     return (
       <ReviewCardContainer>
          <ReviewCardLeftContainer>
               <UserName>{name}</UserName>
               <FeaturesTitle>Features</FeaturesTitle>
               <Value>Value: {value}</Value>
               <Quality>Quality: {quality}</Quality>
               <EaseofUse>Ease of Use: {easeOfUse}</EaseofUse>
               <Cons>{consMentioned()}</Cons>
               <Pros>{prosMentioned()}</Pros>
          </ReviewCardLeftContainer>
          <ReviewCardRightContainer>
               <RatingAndTitleContainer>
                    <div>{calcRating()}</div>
                    <h3>{title}</h3>
               </RatingAndTitleContainer>
               <div>{review_body}</div>
               <div>
               <div>{wouldRecommend()}</div>
               </div>
               <div>{imageMap()}</div>
          </ReviewCardRightContainer>
          



       </ReviewCardContainer>
    

  )
}

export default ReviewCard;

const ReviewCardContainer = styled.div`
     border-bottom: 1px solid lightgray;
     display: flex;
     flex-direction: row;
     margin-top: 30px;
     padding-bottom: 30px;
     .wouldRecommend{
          margin: 15px 0px;
     }
     .cons{
          font-weight: bold;
          span{
               font-weight: normal;
          }
     }
     .pros{
          font-weight: bold;
          span{
               font-weight: normal;
          }
     }
     .mappedImages{
          height: 100px !important;
          width:100px !important;
          margin: 0px 10px;
          :hover{
               border: 1px solid blue;
               cursor: pointer;
          }
     }
`

const CheckMark = styled.img`
     height: 12px !important;
     width: 12px !important;
`

const XMark = styled.img`
     height: 12px !important;
     width: 12px !important;
`
const ReviewCardLeftContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     text-align: left;
     width: 250px;
`

const ReviewCardRightContainer = styled.div`
     display: flex;
     flex-direction: column;
     /* width: 1050px; */
`
const RatingAndTitleContainer = styled.div`
     display: flex;
     padding-bottom: 10px;
     
     h3{
          margin-left: 10px;
     }
`
const FeaturesTitle = styled.h3`
     font-size: 15px;
     margin-bottom: 5px;
`
const StarContainer = styled.div`

`
const Star = styled.img`
     height: 20px !important;
     width: 20px;
     
`
const UserName = styled.h2`
     color: #0457c8;
     font-size: 15px;
     margin-bottom: 15px;
`

const Value = styled.h2`
     font-size: 15px;
     font-weight: normal;
     margin-bottom: 5px;
`

const Quality = styled.h2`
     font-size: 15px;
     font-weight: normal;
     margin-bottom: 5px;
`
const EaseofUse = styled.h2`
     font-size: 15px;
     font-weight: normal;
     margin-bottom: 15px;
`

const Cons = styled.h2`
     font-size: 15px;
     font-weight: normal;
`

const Pros = styled.h2`
     font-size: 15px;
`