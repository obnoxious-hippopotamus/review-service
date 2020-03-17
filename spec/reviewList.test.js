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
const emptyReviewList = shallow(<ReviewList reviews={[]} />);

describe('Review List Component', () => {

  it('works', () => {
    expect(reviewList).toMatchSnapshot();
    expect(reviewList.exists()).toBeTruthy();
  })

  it('contains placeholders if no review prop is rendered', () => {
    expect(emptyReviewList.hasClass('reviewItemView')).toBeFalsy();
    expect(emptyReviewList.hasClass('placeholderView')).toBeTruthy();
    expect(emptyReviewList.childAt(0).hasClass('placeholder')).toBeTruthy();
  });

  it('Review List should recieve reviews prop', () => {
    //tbd
    
  });

  it('should render ReviewItem components', () => {
    expect(reviewList.find('ReviewItem').length).toBeGreaterThan(0);
  });

  it('renders review items when the reviews change', () => {
    emptyReviewList.setProps({
      reviews: sampleReviews
    });

    expect(emptyReviewList.find('ReviewItem').length).toBeGreaterThan(0);
  });
});