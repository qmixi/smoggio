import React from 'react';
import { shallow } from 'enzyme';
import { get } from 'lodash';

import Stats from './index';
import { stats } from '../../../helpers/mocks';

describe('Stats component', () => {
    let wrapper, historyValues, forecastValues;

    beforeEach(() => {
        historyValues = get(stats, 'history', []);
        forecastValues = get(stats, 'forecast', []);
        wrapper = shallow(<Stats history={historyValues} forecast={forecastValues} />);
    });

    it('shows the Stats component', () => {
        expect(wrapper.find('.stats').length).toEqual(1);
    });

    it('shows the historical stats title by default', () => {
        expect(wrapper.find('.stats__title').first().text()).toEqual('Historical stats');
    });

    it('shows proper initial label in the switch mode button', () => {
        expect(wrapper.find('.stats__button').first().text()).toEqual('Forecast');
    });

    it('shows the historical stats title after mode switching', () => {
        const button = wrapper.find('.stats__button').first();
        button.simulate('click');
        setTimeout(() => { expect(wrapper.find('.stats__title').first().text()).toEqual('Forecast stats') });
    });

    it('shows proper button label after mode switching', () => {
        const button = wrapper.find('.stats__button').first();
        button.simulate('click');
        setTimeout(() => { expect(button.text()).toEqual('History') });
    });
});