import React from 'react';
import { mount } from 'enzyme';

import CoordsInput from './index';

describe('CoordsInput component', () => {
    let wrapper,
        fetchCoordsFn;

    beforeEach(() => {
        fetchCoordsFn = jest.fn();
        wrapper = mount(<CoordsInput fetchCoords={fetchCoordsFn} />);
    });

    it('shows the CoordsInput component', () => {
        expect(wrapper.find('.coords-input').length).toEqual(1);
    });

    it('has disabled submit button initially', () => {
        const disabledAttribute = wrapper.find('.coords-input__button').first().prop('disabled');
        expect(disabledAttribute).toEqual(true);
    });

    it('doesn\'t fire fetchCoords function on submit button click, when the value is empty', () => {
        wrapper.find('.coords-input__button').first().simulate('click');
        expect(fetchCoordsFn).toHaveBeenCalledTimes(0);
    });

    it('removes disabled attribute once user inputs address', () => {
        const disabledAttribute = wrapper.find('.coords-input__button').first().prop('disabled');
        expect(disabledAttribute).toEqual(true);
    });

    it('fires fetchCoords function on button click and passes address as an arg', () => {
        const value = 'Warszawa';
        wrapper.find('.coords-input__input').simulate('change', { target: { value } });
        expect(fetchCoordsFn).toHaveBeenCalledTimes(0);
        wrapper.find('.coords-input__button').first().simulate('click');
        expect(wrapper.find('.coords-input__input').prop('value')).toEqual(value);
        expect(fetchCoordsFn).toHaveBeenCalledTimes(1);
        expect(fetchCoordsFn).toBeCalledWith(value);
    });

    it('fires fetchCoords function enter key press and passes address as an arg', () => {
        const value = 'Warszawa';
        const input = wrapper.find('.coords-input__input');
        input.simulate('change', { target: { value } });
        expect(fetchCoordsFn).toHaveBeenCalledTimes(0);
        input.simulate('keyPress', { key: 'Enter', keyCode: 13, which: 13 })
        expect(fetchCoordsFn).toHaveBeenCalledTimes(1);
        expect(fetchCoordsFn).toBeCalledWith(value);
    });
});