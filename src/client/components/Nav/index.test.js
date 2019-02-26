import React from 'react';
import { shallow } from 'enzyme';

import Nav from './index';

it('shows a Nav indicator', () => {
    const nav = shallow(<Nav />);
    expect(nav.find('.nav').length).toEqual(1);
});

