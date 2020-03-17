import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

import ReviewApp from '../client/src/components/reviewApp.jsx';

Enzyme.configure({adapter: new Adapter()});

// jest.mock('../client/src/api/dbGet.js');
const app = shallow(<ReviewApp />);

describe('Review App parent', () => {
    it('renders', () => {
        expect(app.exists()).toBeTruthy();
    });

    it('renders a sidebar and a main section', () => {
        expect(app.childAt(0).hasClass('sidebar')).toBeTruthy();
        expect(app.childAt(1).hasClass('main')).toBeTruthy();
    });

    it('should render ReviewList component', () => {
        expect(app.find('ReviewList').length).toBeGreaterThan(0);
    });

    it('should render Sort component', () => {
        expect(app.find('Sort').length).toBeGreaterThan(0);
    });
    
    it('should render Tags component', () => {
        expect(app.find('Tags').length).toBeGreaterThan(0);
    });

    it('should render Sidebar component', () => {
        expect(app.find('Sidebar').length).toBeGreaterThan(0);
    });

    it('state should include a movie_id equal to 284053 on page load', () => {
        expect(app.state('movie_id')).toEqual(284053);
    });
});