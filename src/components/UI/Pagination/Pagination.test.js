import React from 'react';
import { configure, shallow , mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination';
import GithubIssues from '../../../containers/GithubIssues/GithubIssues';
import expect from 'expect';
configure({ adapter: new Adapter() });

describe('<IssuesFiltering />', () => {
    let wrapper;
    afterEach(() => {
        expect(wrapper).toMatchSnapshot();
    });
    it("OnClick pageNext change  currentPageNumber to 2",()=>{
        const comp=mount( <GithubIssues/>);
        const PaginationComp = comp.find(Pagination);
        const button=PaginationComp.find('button').at(2);
        button.simulate('click');
        expect(comp.state().currentPageNumber).toEqual(2);
    });
});
