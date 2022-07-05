import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronDown } from '@styled-icons/bootstrap';
import Collapsible from 'react-collapsible';
import ResultsOverview from './Components/ResultsOverview/ResultsOverview';
import ListOfReviews from './Components/ListOfReviews/ListOfReviews';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteAReview from './Components/WriteAReview';

function App() {
  
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, [])

  const fetchData = async () => {
    await fetch('http://localhost:3032/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.map((review) => (
        {
          id: review.id,
          sku: review.sku,
          name: review.name,
          title: review.title,
          rating: review.rating,
          body: review.review_body,
          recommend: review.recommend,
          value: review.value,
          quality: review.quality,
          easeOfUse: review.easeofuse,
          image: review.image,
          cons: review.cons,
          pros: review.pros
        }
      ))))
      .catch((error) => console.log(error))
      // console.log(reviews[0].image)

      setLoading(false);
}

if(loading === true){
  console.log('loading')
  return(
    <h1 className="header">Loading</h1>
  )
} else {
  return (
    <BrowserRouter>
      <AppContainer>
        <Collapsible tabIndex={1} trigger='Reviews' triggerSibling={<DownArrowIcon/>} transitionTime={200} overflowWhenOpen={'auto'}>
        <ResultsOverview reviews={reviews} />
        <ListOfReviews reviews={reviews} />
      </Collapsible>
      <Routes>
          <Route path='/writeareview' element={<WriteAReview />} />
        </Routes>
    </AppContainer>
    </BrowserRouter>

  );
}
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: 90px;
  margin-right: 90px; */
  /* max-width: 1500px; */
  overflow: hidden;
  img{
    height: 200px;
  }
`

const DownArrowIcon = styled(ChevronDown)`
  height: 20px;
  justify-self: flex-end;
`
