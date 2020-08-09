import React from 'react';
import { configure, shallow , mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';
import expect from 'expect';
import GithubIssues from '../../../containers/GithubIssues/GithubIssues';
configure({ adapter: new Adapter() });

describe('<Button />', () => {
    let wrapper;
    afterEach(() => {
        expect(wrapper).toMatchSnapshot();
    });
    it('renders a <button>', () => {
        wrapper = shallow(
            <Button />
        );
        expect(
            wrapper.find("button").getElements()
        );
    });
    it('renders text', () => {
        const text = "Sorting By Latest";
        wrapper = shallow(
            <Button>{text}</Button>
        );
        expect(
            wrapper.contains(text)
        ).toEqual(true);
    });
    it("OnClick Change State SortName to Oldest",()=>{
        const comp=mount( <GithubIssues/>);
        const button = comp.find('button').at(0);
        button.simulate('click');
        expect(comp.state().sortName).toEqual('Oldest');
    });
});
