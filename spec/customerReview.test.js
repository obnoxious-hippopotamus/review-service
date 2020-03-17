import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CustomerReview from '../client/src/components/customerReview.jsx';

Enzyme.configure({adapter: new Adapter()});

const app = shallow(<CustomerReview />);

describe('Customer Review Component', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });
});