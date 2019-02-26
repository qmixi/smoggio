import React from 'react';
import { shallow } from 'enzyme';

import Stack from './index';

it('shows a Stack indicator', () => {
    const stack = shallow(<Stack />);
    expect(stack.find('.stack').length).toEqual(1);
});

