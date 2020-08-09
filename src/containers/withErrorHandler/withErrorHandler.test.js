import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WithErrorHandler from './WithErrorHandler';
import Modal from '../../components/UI/Modal/Modal';

configure({adapter: new Adapter()});

describe('<WithErrorHandler />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WithErrorHandler />);
    });
    afterEach(() => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render <Modal /> when error is true', () => {
        wrapper.setState({error: true});
        expect(wrapper.find(Modal).length).toBe(1);
    });
});


