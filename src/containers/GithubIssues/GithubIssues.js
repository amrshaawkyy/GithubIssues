import React, { Component } from 'react';
import IssuesFiltering from '../IssuesFiltering/IssuesFiltering';
import Pagination from '../../components/UI/Pagination/Pagination';
import 'bulma/css/bulma.css';
import '../../css/GithubIssues.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import GitHubIssue from '../../components/GitHubIssue/GitHubIssue';
class GithubIssues extends Component {
    state = {
        user: 'facebook',
        repo: 'react',
        listFilter: { state: "open", choice: "issues" },
        since: new Date('01/01/'+ new Date().getFullYear()),
        per_page: 40,
        sort: true,
        page: '',
        currentPageNumber: 1,
        pages: {},
        issues: [],
        loading: true,
        error: null,
        showBody: {},
        sortName: "Latest"
    }
    componentDidMount() {
        this.fetchAllIssues();
    }
    shouldComponentUpdate(previousState, nextState) {
        if (previousState.page !== nextState.page) {
            return true;
        }
        if (previousState.listFilter !== nextState.listFilter) {
            return true;
        }
        return false;
    }
    fetchAllIssues() {
        const headers = {
            headers: {
                Authorization: "token 60e07ff280c786e523a632be9af8f992270a5c5b",
                Accept: "application/vnd.github.v3+json,application/vnd.github.machine-man-preview+json",
            }
        };
        const baseUrl = "https://api.github.com/repos"
        let url = { state: this.state.listFilter.state, since: this.state.since, per_page: 40, sort: this.state.sort ? "created" : "created-asc" };
        const keys = Object.keys(url)
        const params = keys.length ?
            "?" + keys
                .map(key => encodeURIComponent(key) +
                    "=" + encodeURIComponent(url[key]))
                .join("&") :
            "";
        let linkHeaders = ''
        let userRepoIssues = `${this.state.user}/${this.state.repo}/issues`
        let fullUrl = `${baseUrl}/${userRepoIssues}${params}${this.state.page}`
        fetch(fullUrl, headers)
            .then(response => {
                if (response.headers.get('Link')) {
                    linkHeaders = this.parseLinkHeader(response.headers.get('Link'))
                }
                if (response.ok) return response.json();
                throw new Error('Request failed');
            })
            .then(data => {
                this.setState({
                    pages: linkHeaders,
                    issues: data,
                    loading: false,
                    error: null,
                    showBody: {},
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                });
            });
    }
    handlePageChange(page) {
        const newPage = (previousState) => {
            return { ...previousState, page: page, currentPageNumber: +page.split('=').pop(), loading: true };
        };
        this.setState(newPage, () => {
            this.fetchAllIssues()
        })
    }
    handleFilterChange(toFilter) {
        let newObj = { ...this.state.listFilter, ...toFilter }
        const newFilter = (previousState) => {
            let stateTest = previousState.listFilter.state !== newObj.state ? true : false
            return { ...previousState, listFilter: newObj, loading: stateTest };
        };
        this.setState(newFilter, () => {
            Object.keys(toFilter)[0] === "state" && this.fetchAllIssues()
        })
    }
    parseLinkHeader = (header) => {
        if (header.length === 0) {
            throw new Error("input must not be of zero length");
        }
        return header.split(/(?!\B"[^"]*),(?![^"]*"\B)/).reduce((links, part) => {
            const section = part.split(/(?!\B"[^"]*);(?![^"]*"\B)/);
            if (section.length < 2) {
                throw new Error("section could not be split on ';'");
            }
            const url = section[0].replace(/<(.*)>/, '$1').trim();
            const name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = url;

            return links;
        }, {});
    }
    handleSortingChange() {
        let newObj = { ...this.state.sort };
        const newState = (previousState) => {
            let stateTest = previousState.sort !== newObj ? true : false
            return { ...previousState, sort: !previousState.sort, loading: stateTest, sortName: !previousState.sort ? "Latest" : "Oldest" };
        };
        this.setState(newState, () => {
            this.fetchAllIssues()
        })
    }
    showBodyHandler = (obj) => {
        this.setState({ showBody: obj })
    }
    handleDateChange (date)  {
        const newFilter = (previousState) => {
            let stateTest = previousState.since !== date ? true : false
            return { ...previousState, since: date, loading: stateTest };
        };
        this.setState(newFilter, () => {
            this.fetchAllIssues()
        })
    }
    render() {
        return (
            <div className="container">
                <nav className="panel" >
                    <IssuesFiltering
                        listFilter={this.state.listFilter}
                        onFilterChange={(event) => this.handleFilterChange(event)}
                        sortName={this.state.sortName}
                        clicked={(event) => this.handleSortingChange(event)}
                        startDate={this.state.since}
                        handleDateChange={(event)=>this.handleDateChange(event)}
                    />
                    {this.state.loading ?
                        <Spinner />
                        : <GitHubIssue state={this.state} showBodyHandler={this.showBodyHandler} />}
                    <nav className="navbar  is-fixed-bottom is-transparent">
                        <div className="navbar-start" style={{ flexGrow: 1, justifyContent: "center" }}>
                            <div className="navbar-item">
                                <Pagination pages={this.state.pages} currentPageNumber={this.state.currentPageNumber} onPageChange={(event) => this.handlePageChange(event)} />
                            </div>
                        </div>
                    </nav>
                </nav></div>);
    }
}
export default GithubIssues;

