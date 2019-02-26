import React from 'react';
import { shallow } from 'enzyme';

import Installation from './index';
import { installation } from '../../../helpers/mocks';

describe('Installation component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Installation installation={installation} />);
    });

    it('shows the Installation component', () => {
        expect(wrapper.find('.installation').length).toEqual(1);
    });

    it('uses proper redirection url', () => {
        const url = `/installation/${installation.id}`;
        expect(wrapper.find('.installation').prop('to')).toEqual(url);
    });

    it('displays proper city', () => {
        expect(wrapper.find('.installation__city').text()).toEqual(installation.address.city);
    });

    it('displays proper address', () => {
        const address = ` ${installation.address.street} ${installation.address.number}`
        expect(wrapper.find('.installation__address').text()).toEqual(address);
    });
});