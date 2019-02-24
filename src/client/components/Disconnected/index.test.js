import React from 'react';
import { shallow } from 'enzyme';

import Disconnected from './index';

describe('Disconnected component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Disconnected description="Disconnected component description" />);
    });

    it('shows the Disconnected component', () => {
        expect(wrapper.find('.disconnected').length).toEqual(1);
    });

    it('displays description provided in props', () => {
        const disconnected = wrapper.find('.disconnected__description');
        expect(disconnected.length).toEqual(1);
        expect(disconnected.text()).toEqual('Disconnected component description');
    });
});