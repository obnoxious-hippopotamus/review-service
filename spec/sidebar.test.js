import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

import Sidebar from '../client/src/components/sidebar.jsx';

Enzyme.configure({adapter: new Adapter()});

let sampleReviews = [
    {id: 834, movie_id: 284053, author: "Gimly", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 2},
    {id: 835, movie_id: 284053, author: "John", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 4}
  ];

const app = shallow(<Sidebar reviews={sampleReviews} />);

describe('Sidebar Component', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });

    it('renders RatingsChart component', () => {
        expect(app.find('RatingChart').length).toBeGreaterThan(0);
    });

    it('renders CustomerReview component', () => {
        expect(app.find('CustomerReview').length).toBeGreaterThan(0);
    });

    it('props includes reviews', () => {
        expect(app.find('RatingChart').props('reviews')).toBeTruthy()
    });
});