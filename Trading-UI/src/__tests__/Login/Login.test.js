import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Login from '../../../src/Components/Login/Login';

describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Login history={[]} />);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    it('should render the 1 button',()=>{
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('should have called handle click book function', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.instance().forceUpdate();
        wrapper.find('#submit').simulate('click',{
          preventDefault: () => {
          }
         });
        expect(spy).toHaveBeenCalled();
      });
   
})

