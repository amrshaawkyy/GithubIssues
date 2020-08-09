import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';
import ButtonMain from '../UI/ButtonMain/ButtonMain';

configure({ adapter: new Adapter() });


describe('<Main />', () => {
    const wrapper = shallow(<Main />);
    afterEach(() => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render one <ButtonMain /> element', () => {
        expect(wrapper.find(ButtonMain)).toHaveLength(1);
    });
    it('renders text', () => {
        const text = "Issues";
        const renderedComponent = shallow(
            <ButtonMain>{text}</ButtonMain>
        );
        expect(
            renderedComponent.contains(text)
        ).toEqual(true);
    });
});
