import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

import Sort from '../client/src/components/sort.jsx';

Enzyme.configure({adapter: new Adapter()});

const app = shallow(<Sort />);

describe('Sort Component', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });
});