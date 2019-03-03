import React from 'react';
import { shallow } from 'enzyme';
import { get } from 'lodash';

import NotFoundPage from './index';


describe('NotFoundPage component', () => {
    let wrapper, context;

    beforeEach(() => {
        context = {};
        wrapper = shallow(<NotFoundPage.component staticContext={context} />);
    });

    it('shows the NotFoundPage component', () => {
        expect(wrapper.find('.not-found').length).toEqual(1);
    });

    it('sets proper value to inputed context', () => {
        expect(context.notFound).toEqual(true);
    });
});