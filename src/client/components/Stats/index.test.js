import React from 'react';
import { shallow } from 'enzyme';

import Stats from './index';

describe('Stats component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Stats />);
    });

    it('shows the Stats component', () => {
        expect(wrapper.find('.stats').length).toEqual(1);
    });
});