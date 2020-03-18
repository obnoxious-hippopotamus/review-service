import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import dbGet from '../client/src/api/dbGet.js';
import moviesGet from '../client/src/api/moviesGet.js';

Enzyme.configure({adapter: new Adapter()});

describe('API helper functions', () => {
    it('dbGet function queries the database and returns results', () => {
        
        // let results;
        
        // dbGet(2843)
        //     .then(res => {
        //         results = res;
        //     })
        //     .catch(err => {
        //         console.log(res)
        //     });
    });
});