import React from 'react';
import { shallow } from 'enzyme';
import { get } from 'lodash';

import LiveStats from './index';
import { stats } from '../../../helpers/mocks';
import { getUnit } from '../../utils';


describe('LiveStats component', () => {
    let wrapper, liveValues;

    beforeEach(() => {
        liveValues = get(stats, 'current.values', []);
        wrapper = shallow(<LiveStats values={liveValues} />);
    });

    it('shows the LiveStats component', () => {
        expect(wrapper.find('.stats-live').length).toEqual(1);
    });

    it('displays correct amount of value items', () => {
        expect(wrapper.find('.stats-live__item').length).toEqual(liveValues.length);
    });

    it('displays properly field name for first item', () => {
        const name = liveValues[0].name;
        expect(wrapper.find('.stats-live__item-title').first().text()).toEqual(name);
    });

    it('displays properly value for first item', () => {
        const value = liveValues[0].value;
        expect(parseFloat(wrapper.find('.stats-live__item-value-tx').first().text(), 10)).toEqual(value);
    });

    it('displays properly unit for first item', () => {
        const unit = getUnit(liveValues[0].name);
        expect(wrapper.find('.stats-live__item-unit').first().text()).toEqual(unit);
    });
});