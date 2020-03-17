
// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ReviewList from '../client/src/components/reviewList.jsx';

let sampleReviews = [
  {id: 834, movie_id: 284053, author: "Gimly", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 2},
  {id: 835, movie_id: 284053, author: "John", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 4}
];

const reviewList = shallow(<ReviewList reviews={sampleReviews}  />);

reviewList.find('button')

describe('Review List Component', () => {

  it('works', () => {
    expect(reviewList).toMatchSnapshot();
    expect(reviewList.exists()).toBeTruthy();
  })

  it('Review List should recieve reviews prop', () => {
    
    // reviewList.reviews.forEach(review => {
    //   console.log(review)

    // })
    // expect(reviewList.reviews[0].id).toBe(834)
    
  });
});