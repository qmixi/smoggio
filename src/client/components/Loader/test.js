import React from 'react';
import Loader from './index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Loader />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(1).toBe(1);
});

it('has a lot to say', () => {
    expect(1).toBe(1);
})

it('has a lot to say1', () => {
    expect(2).toBe(2);
})

it('shows a loader indicator', () => {
    const wrapper = mount(<Loader />);
    expect(wrapper.find('.loader').length).toEqual(1);
});

