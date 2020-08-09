import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  GithubIssues  from './GithubIssues';
import GitHubIssue from '../../components/GitHubIssue/GitHubIssue';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<GithubIssues />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GithubIssues />);
    });
    afterEach(() => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render <GitHubIssue /> when Loading is false', () => {
        wrapper.setState({loading: false});
        expect(wrapper.find(GitHubIssue).length).toBe(1);
    });
    it('should render <Spinner /> when Loading is True', () => {
        wrapper.setState({loading: true});
        expect(wrapper.find(Spinner).length).toBe(1);
    });
});


