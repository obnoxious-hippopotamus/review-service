import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RatingChart from '../client/src/components/ratingChart.jsx';

Enzyme.configure({adapter: new Adapter()});

let sampleReviews = [
    {id: 834, movie_id: 284053, author: "Gimly", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 2},
    {id: 835, movie_id: 284053, author: "John", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 4},
    {id: 836, movie_id: 284053, author: "Steve", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 1},
    {id: 837, movie_id: 284053, author: "Jeff", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 3},
    {id: 838, movie_id: 284053, author: "Shawn", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 5},
    {id: 839, movie_id: 284053, author: "fake_news", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: undefined}
];

const app = shallow(<RatingChart reviews={sampleReviews} />);

describe('RatingChart Component', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });
});