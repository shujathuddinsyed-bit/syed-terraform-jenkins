import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Trending from '../../Components/Trending/Trending';


describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Trending/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    
   
})

