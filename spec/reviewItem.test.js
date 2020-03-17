import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ReviewItem from '../client/src/components/reviewItem.jsx';

let sampleReviews = [
  {id: 834, movie_id: 284053, author: "Gimly", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 2},
//   {id: 835, movie_id: 284053, author: "John", content: "bblah blah blah", image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg", rating: 4}
];

const app = shallow(<ReviewItem review={sampleReviews}  />);

describe('ReviewItem Component', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });

    it('is a stateful component', () => {
        expect(app.state()).toBeTruthy();
    });
});

