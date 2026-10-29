import React,{Component} from 'react';
import { shallow } from 'enzyme';import Purchase from '../../Components/Purchase/Purchase';
import ListStocks from '../../Components/ListStocks/ListStocks';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<ListStocks/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
})

