import React from 'react';
import { shallow } from 'enzyme';

import Installations from './Installations';
import { installations } from '../../../helpers/mocks';

describe('Installations component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Installations installations={installations} />);
    });

    it('shows the Installations component', () => {
        expect(wrapper.find('.installations').length).toEqual(1);
    });

    it('generates proper amount of installation positions', () => {
        expect(wrapper.find('.installations__item').length).toEqual(installations.length);
    });
});