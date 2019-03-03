import React from 'react';
import { shallow } from 'enzyme';
import { get } from 'lodash';

import StatsSummary from './index';
import { stats } from '../../../helpers/mocks';

describe('StatsSummary component', () => {
    let wrapper, summary;

    beforeEach(() => {
        summary = get(stats, 'current.indexes[0]', {});
        wrapper = shallow(<StatsSummary summary={summary} />);
    });

    it('shows the StatsSummary component', () => {
        expect(wrapper.find('.summary').length).toEqual(1);
    });

    it('displays properly parsed value', () => {
        expect(wrapper.find('.summary__value').first().text()).toEqual('12');
    });

    it('shows proper description', () => {
        expect(wrapper.find('.summary__description').first().text()).toEqual(summary.description);
    });

    it('sets proper CSS low status class', () => {
        expect(wrapper.find('.summary--low').length).toEqual(1);
        expect(wrapper.find('.summary--medium').length).toEqual(0);
        expect(wrapper.find('.summary--high').length).toEqual(0);
    });

    it('sets proper CSS very low status class', () => {
        expect(wrapper.find('.summary--low').length).toEqual(1);
        expect(wrapper.find('.summary--medium').length).toEqual(0);
        expect(wrapper.find('.summary--high').length).toEqual(0);
    });

    it('sets proper CSS medium status class', () => {
        summary.level = 'MEDIUM';
        wrapper = shallow(<StatsSummary summary={summary} />);

        expect(wrapper.find('.summary--low').length).toEqual(0);
        expect(wrapper.find('.summary--medium').length).toEqual(1);
        expect(wrapper.find('.summary--high').length).toEqual(0);
    });

    it('sets proper CSS high status class', () => {
        summary.level = 'HIGH';
        wrapper = shallow(<StatsSummary summary={summary} />);

        expect(wrapper.find('.summary--low').length).toEqual(0);
        expect(wrapper.find('.summary--medium').length).toEqual(0);
        expect(wrapper.find('.summary--high').length).toEqual(1);
    });
});