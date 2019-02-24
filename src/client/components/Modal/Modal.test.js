import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('Modal component', () => {
    let wrapper,
        hideModalFn;

    beforeEach(() => {
        hideModalFn = jest.fn();
        wrapper = shallow(<Modal hideModal={hideModalFn} Content={<div className="test-content" />} />);
    });

    it('shows the modal component', () => {
        expect(wrapper.find('.modal').length).toEqual(1);
    });

    it('fires hideModal function on close button click', () => {
        wrapper.find('.modal__close').first().simulate('click');
        expect(hideModalFn).toHaveBeenCalledTimes(1);
    });

    it('displays content provided in props', () => {
        expect(wrapper.find('.test-content').length).toEqual(1);
    });
});