import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

import Tags from '../client/src/components/tags.jsx';

Enzyme.configure({adapter: new Adapter()});

const app = shallow(<Tags />);

describe('Tags Component', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });
});