import React from 'react'
import styled from 'styled-components';

function ReviewCard({name, title, rating, review_body, recommend, value, quality, easeOfUse, image, cons, pros}) {
  
     function wouldRecommend(){
          if(recommend === true){
               return(
                    <div>I would recommend this to a friend</div>
               )
          } else {
               return(
               <div>I would not recommend this to a friend</div>
               )
          }
     }

     function prosMentioned(){
          if(pros !== null){
               return(
                    <div>Pros Mentioned: {pros}</div>
               )
          }
     }

     function consMentioned(){
          if(cons !== null){
               return(
                    <div>Cons Mentioned: {cons}</div>
               )
          }
     }

     return (
       <ReviewCardContainer>
          <div>{name}</div>
          <div>{title}</div>
          <div>Rating: {rating}</div>
          <div>{review_body}</div>
          <div>{wouldRecommend()}</div>
          <div>Value: {value}</div>
          <div>Quality: {quality}</div>
          <div>Ease of Use: {easeOfUse}</div>
          <img src={image}></img>
          <div>{consMentioned()}</div>
          <div>{prosMentioned()}</div>

       </ReviewCardContainer>
    

  )
}

export default ReviewCard;

const ReviewCardContainer = styled.div`
     border-bottom: 1px solid lightgray;
`