import React from 'react';
import WithErrorHandler from '../../containers/withErrorHandler/WithErrorHandler';
import Aux from "../../hoc/AUX1/Aux1";
import Icons from '../UI/Icons/Icons';
import CreationTime from '../Information/CreationTime';
import Labels from '../Information/Labels';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comments from '../Information/Comments';
import PropTypes from 'prop-types';
import '../../css/GithubIssues.css';
const showdown = require('showdown')
const gitHubIssue = (props) => {
    if (props.state.error) {
        return <WithErrorHandler errormsg={props.state.error.message + ": Can Not Fetch Data"} />;
    }
    const isVisible = (id) => {
        return props.state.showBody["_" + id] ? " container bodyContainer" : " is-hidden"
    }
    const handleClick = (e) => {
        e.preventDefault();
        let converter = new showdown.Converter({
            tables: true,
            strikethrough: true,
            ghCompatibleHeaderId: true,
            literalMidWordUnderscores: true,
            ghCodeBlocks: true,
            tasklists: true,
            ghMentions: true,
            ghMentionsLink: 'https://github.com/{u}'
        })
        let obj = {}
        const id = e.currentTarget.dataset.id;
        obj["_" + id] = props.state.showBody["_" + id] === true ? false : true
        props.showBodyHandler(obj)
        if (obj["_" + id]) {
            props.state.issues.map(function (issues) {
                if (issues.id === +id) {
                    return document.querySelector(`._${id}`).innerHTML = converter.makeHtml(issues.body)
                }
                return true
            })
        }
    }
    const hideMe = (issueOrPr) => {
        let choiceType = issueOrPr ? "issues" : "pull requests"
        return (props.state.listFilter.choice !== (choiceType || "all") ? " " : " is-hidden")
    }
    return (
        < Aux >
            {
                props.state.issues.map(function (data, index) {
                    return <a href="/" key={index} className={"panel-block" + hideMe(data.pull_request)}>
                        <span data-id={data.id} className="panel-ovr" onClick={handleClick} >
                            <span className="columns is-mobile is-multiline is-vcentered is-2">
                                <span className=" column is-1">
                                    <span className="panel-icon icon is-small">
                                        <Icons type={!data.pull_request} state={data.state} />
                                    </span>
                                </span>
                                <span className="column is-11 info-container">
                                    <span className="_title">{data.title}</span>
                                    <br className="is-hidden-tablet" />
                                    <span className="time is-hidden-tablet">
                                        <CreationTime data={data} />
                                    </span>
                                    <br className="is-hidden-tablet" />
                                    <Labels labels={data.labels} />
                                    <br className="is-hidden-mobile" />
                                    <span className="time is-hidden-mobile">
                                        <CreationTime data={data} />
                                        <Comments data={data} />
                                    </span>
                                </span>
                                <span className="column show-body has-text-right is-pulled-right">
                                    <FontAwesomeIcon /*className="rotate"*/ icon={faThumbtack} style={{ color: 'blue' }} />
                                </span>
                            </span>
                        </span>
                        <span className={"_" + data.id + (isVisible(data.id))}></span>
                    </a>;
                })
            }
        </ Aux>
    );
}
gitHubIssue.propTypes = {
    error: PropTypes.string,
    showBody: PropTypes.string,
    issues: PropTypes.array
};
export default gitHubIssue;