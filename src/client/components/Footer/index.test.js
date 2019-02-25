import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('shows the Footer component', () => {
        expect(wrapper.find('.footer').length).toEqual(1);
    });
});