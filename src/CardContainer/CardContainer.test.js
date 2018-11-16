import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {

  let wrapper;

  let photos = [
    'photo1', 
    'photo2'
  ]

  beforeEach(() => {
    wrapper = shallow(<CardContainer photos={photos}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})