import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Home from '../../Components/Home/Home';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Home/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    
   
})

