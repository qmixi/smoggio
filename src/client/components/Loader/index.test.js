import React from 'react';
import { shallow } from 'enzyme';

import Loader from './index';

it('shows a loader indicator', () => {
    const loader = shallow(<Loader />);
    expect(loader.find('.loader').length).toEqual(1);
});

