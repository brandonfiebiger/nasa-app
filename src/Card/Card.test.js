import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';


describe('Card', () => {
  let wrapper;
  let mockPhoto = {
    image: 'image',
    date: 'date',
    rover: 'rover',
    camera: 'camera',
    id: 1
  }
  beforeEach(() => {
    wrapper = shallow(<Card photo={mockPhoto} />)
  })


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})