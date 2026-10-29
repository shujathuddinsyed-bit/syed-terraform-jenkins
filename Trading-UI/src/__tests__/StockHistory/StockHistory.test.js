import React,{Component} from 'react';
import { shallow } from 'enzyme';
import StockHistory from '../../Components/StockHistory/StockHistory';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<StockHistory/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    
   
})

