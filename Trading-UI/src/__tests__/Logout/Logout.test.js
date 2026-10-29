import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Logout from '../../Components/Logout/Logout';
describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Logout/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    
   
})

