import React from 'react'
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

function ListOfReviews({ reviews }) {
  return (
    <ListOfReviewsContainer>
      {
        reviews.map((review) => (
          <ReviewCard
            id={review.id}
            name={review.name}
            title={review.title} 
            rating={review.rating}
            review_body={review.body}
            recommend={review.recommend} 
            value={review.value}
            quality={review.quality}
            easeOfUse={review.easeOfUse}
            image={review.image}
            cons={review.cons}
            pros={review.pros}
          />
        ))
      }
    </ListOfReviewsContainer>
  )
}

export default ListOfReviews;

const ListOfReviewsContainer = styled.div`
  width: 1270px;
  margin-bottom: 50px;
`