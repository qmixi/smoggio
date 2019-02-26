import React from 'react';
import { shallow } from 'enzyme';

import InstallationHeader from './index';
import { installation } from '../../../helpers/mocks';

describe('Installation component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<InstallationHeader installation={installation} />);
    });

    it('shows the InstallationHeader component', () => {
        expect(wrapper.find('.installation-header').length).toEqual(1);
    });

    it('displays proper title', () => {
        const { address: { city, street, number } } = installation;
        const title = `${city}, ${street} ${number}`
        expect(wrapper.find('.installation-header__title').text()).toEqual(title);
    });

    it('displays proper subtitle', () => {
        const { sponsor: { name, description } } = installation;
        const subtitle = `${description}: ${name}`
        expect(wrapper.find('.installation-header__subtitle').text()).toEqual(subtitle);
    });

    it('displays only sponsor name in subtitle when the description is missing', () => {
        const data = { ...installation, sponsor: { ...installation.sponsor, description: '' } };
        wrapper = shallow(<InstallationHeader installation={data} />);
        const subtitle = ` ${installation.sponsor.name}`
        expect(wrapper.find('.installation-header__subtitle').text()).toEqual(subtitle);
    });
});