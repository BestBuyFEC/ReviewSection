import React from 'react'
import styled from 'styled-components';

function CustomerReviews({ reviews }) {

     // function calcRating(){
     //      if(rating > 0){
     //        return(
     //          Array(Math.floor(rating))
     //          .fill()
     //          .map(rating => <StarIcon />)
     //        )
     //      } else {
     //        return 'No User Ratings';
     //      }
     //    }

     function numOfReviews(){
          return (
               <span>{reviews.length}</span>
          )
     }

  return (
     
    <CustomerReviewsContainer>
    <Title>Customer Reviews</Title>
          <ContentContainer>
         <AverageContainer>
               <h1>5.0</h1>
               <StarContainer>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
               </StarContainer>
               <CustomerReviewCount>({numOfReviews()} customer reviews)</CustomerReviewCount>
               <WriteAReviewBtn>Write A Review</WriteAReviewBtn>
         </AverageContainer>
         <ProgressCheckBoxContainer>
              <SingleProgressCheckbox>
                    <CheckBox type='checkbox'></CheckBox>
                    <CheckBoxNum>5</CheckBoxNum>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <ProgressBar id="file" value="100" max="100"></ProgressBar>
                    <ProgressBarNum>41</ProgressBarNum>
              </SingleProgressCheckbox>
              <SingleProgressCheckbox>
                    <CheckBox type='checkbox'></CheckBox>
                    <CheckBoxNum>4</CheckBoxNum>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <ProgressBar id="file" value="0" max="100"></ProgressBar>
                    <ProgressBarNum>0</ProgressBarNum>
              </SingleProgressCheckbox>
              <SingleProgressCheckbox>
                    <CheckBox type='checkbox'></CheckBox>
                    <CheckBoxNum>3</CheckBoxNum>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <ProgressBar id="file" value="0" max="100"></ProgressBar>
                    <ProgressBarNum>0</ProgressBarNum>
              </SingleProgressCheckbox>
              <SingleProgressCheckbox>
                    <CheckBox type='checkbox'></CheckBox>
                    <CheckBoxNum>2</CheckBoxNum>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <ProgressBar id="file" value="0" max="100"></ProgressBar>
                    <ProgressBarNum>0</ProgressBarNum>
              </SingleProgressCheckbox>
              <SingleProgressCheckbox>
                    <CheckBox type='checkbox'></CheckBox>
                    <CheckBoxNum>1</CheckBoxNum>
                    <Star src={'https://www.realisgymnastics.com/wp-content/uploads/2017/02/480px-Gold_Star.svg_.png'}/>
                    <ProgressBar id="file" value="0" max="100"></ProgressBar>
                    <ProgressBarNum>0</ProgressBarNum>
              </SingleProgressCheckbox>

         </ProgressCheckBoxContainer>
         </ContentContainer>
    </CustomerReviewsContainer>
  )
}

export default CustomerReviews;

const CustomerReviewsContainer = styled.div`
     background-color: white;
     width: 580px;
     height: 208px;
     border: 1px solid lightgray;
     border-radius: 4px;
     margin-right: 15px;
     padding: 20px;
`
const ContentContainer = styled.div`
     display: flex;
     flex-direction: row;
     
`
const AverageContainer = styled.div`
     margin-top: 10px;
     h1{
          font-size: 45px;
          margin: 0;
     }
`

const Title = styled.h5`
     font-weight: normal;
`
const StarContainer = styled.div`

`
const Star = styled.img`
     height: 25px !important;
     width: 25px;
     
`
const CustomerReviewCount = styled.h3`
     font-weight: normal;
     font-size: 14px;
`

const WriteAReviewBtn = styled.button`
     background-color: #0457c8;
     font-weight: bold;
     color: white;
     padding: 7px 30px;
     border: none;
     border-radius: 4px;
     margin-top: 10px;
     :hover{
          cursor: pointer;
          background-color: #001e73;
     }
`

const ProgressCheckBoxContainer = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: 50px;
`

const SingleProgressCheckbox = styled.div`
     display: flex;
     align-content: center;
     text-align: center;
     margin-bottom: 7px;
     img{
          height: 17px !important;
          width: 17px !important;
          margin-right: 5px;
          align-self: center;
     }
`

const ProgressBar = styled.progress`
     display: flex;
     width: 270px;
     height: 27px;
     margin: 0px 5px;
     progress[value] {
     -webkit-appearance: none;
     appearance: none;
     }
     progress[value]::-webkit-progress-bar {
     background-color: green;
     }
`
const CheckBox = styled.input`
     height:17px;
     width: 17px;
     margin-right: 10px;
     align-self: center;
`
const CheckBoxNum = styled.span`
     margin-right: 5px;
     align-self: center;
`
const ProgressBarNum = styled.span`
     align-self: center;
     color: blue;
`