import React from 'react';
import { mount } from 'enzyme';

import FavoriteIndicator from './index';

describe('unchecked FavoriteIndicator component', () => {
    let wrapper,
        setFav,
        removeFav

    beforeEach(() => {
        setFav = jest.fn();
        removeFav = jest.fn();
        wrapper = mount(<FavoriteIndicator setFav={setFav} removeFav={removeFav} isFav={false} />);
    });

    it('shows the unchecked FavoriteIndicator component', () => {
        expect(wrapper.find('.favorite-indicator').length).toEqual(1);
    });

    it('displays empty heart initially', () => {
        expect(wrapper.find('.far').length).toEqual(1);
        expect(wrapper.find('.fas').length).toEqual(0);
    });

    it('fires setFav function on empty heart click', () => {
        wrapper.find('.far').simulate('click');
        expect(setFav).toHaveBeenCalledTimes(1);
        expect(removeFav).toHaveBeenCalledTimes(0);
    });
});

describe('checked FavoriteIndicator component', () => {
    let wrapper,
        setFav,
        removeFav

    beforeEach(() => {
        setFav = jest.fn();
        removeFav = jest.fn();
        wrapper = mount(<FavoriteIndicator setFav={setFav} removeFav={removeFav} isFav={true} />);
    });

    it('shows the FavoriteIndicator component', () => {
        expect(wrapper.find('.favorite-indicator').length).toEqual(1);
    });

    it('displays empty heart initially', () => {
        expect(wrapper.find('.far').length).toEqual(0);
        expect(wrapper.find('.fas').length).toEqual(1);        
    });

    it('fires setFav function on empty heart click', () => {
        wrapper.find('.fas').simulate('click');
        expect(setFav).toHaveBeenCalledTimes(0);
        expect(removeFav).toHaveBeenCalledTimes(1);
    });
});