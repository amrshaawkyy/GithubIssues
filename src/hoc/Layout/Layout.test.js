import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  Layout  from './Layout';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

configure({adapter: new Adapter()});

describe('<Layout />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });
    afterEach(() => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render <SideDrawer /> when showSideDrawer is true', () => {
        wrapper.setState({showSideDrawer: true});
        expect(wrapper.find(SideDrawer).length).toBe(1);
    });
});


