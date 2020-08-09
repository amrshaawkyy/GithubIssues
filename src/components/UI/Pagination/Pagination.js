import React from 'react';
import PageNavigation from './PageNavigation';
import Arrow from '../Arrow/Arrow'
import PropTypes from 'prop-types';
const pagination = (props) => {
    const sendPageNumber = (e) => {
        props.onPageChange(`${e.currentTarget.dataset.url}`);
    }
    const swipingLeft = (e, absX) => {
        const lastpage = props.pages.last ? props.pages.last.split("=").pop() : props.pages.prev ? +props.pages.prev.split("=").pop() + 1 : 1
        if (props.currentPageNumber < lastpage) {
            props.onPageChange(`&page=${props.currentPageNumber + 1}`)
        };
    }
    const swipingRight = (e, absX) => {
        if (props.currentPageNumber > 1) {
            props.onPageChange(`&page=${props.currentPageNumber - 1}`)
        };
    }
    const pages = props.pages;
    const currentPageNumber = props.currentPageNumber
    const lastpage = pages.last ? pages.last.split("=").pop() : pages.prev ? +pages.prev.split("=").pop() + 1 : 1
    const pageButtons = Array.apply(null, { length: lastpage })
        .map(Number.call, Number)
        .map(x => `&page=${x + 1}`)
    let button = null;
    if (pageButtons.length > 12) {
        button = <button
             className=" pagination-link  is-hidden-mobile">{`${currentPageNumber}/${lastpage}`}
        </button>
    }
    else {
        button = pageButtons.map((page, i) => {
            const p = +page.split("=").pop()
            return <li key={i} className="is-hidden-mobile">
                <button
                    data-url={page}
                    onClick={(event) => sendPageNumber(event)}
                    className={"pagination-link " + (p === (currentPageNumber) ? " is-current" : p)}
                    aria-label={"Goto page " + p} >{p}
                </button>
            </li>
        })
    }
    return (
        <PageNavigation onSwipingLeft={(event) => swipingLeft(event)} onSwipingRight={(event) => swipingRight(event)}>
            <nav className="pagination is-small is-centered" role="navigation" aria-label="pagination">
                <button
                    className={"pagination-previous " + (currentPageNumber > 1 ? "" : " is-invisible")}
                    data-url={`&page=${currentPageNumber - 1}`}
                    onClick={(event) => sendPageNumber(event)}>
                    <Arrow angle={270} length={12} width={30} filled={false} color="#80868B" />
                </button>
                <button
                    className="pagination-link is-hidden-tablet">{`${currentPageNumber}/${lastpage}`}
                </button>
                <button
                    className={"pagination-next " + (currentPageNumber < lastpage ? "" : " is-invisible")}
                    data-url={`&page=${currentPageNumber + 1}`}
                    onClick={(event) => sendPageNumber(event)}>
                    <Arrow angle={90} length={12} width={30} filled={false} color="#80868B" />
                </button>
                <ul className="pagination-list">
                    {button}
                </ul>
            </nav>
        </PageNavigation >
    );
}
pagination.propTypes = {
    onPageChange: PropTypes.func,
    pages: PropTypes.object,
    currentPageNumber: PropTypes.number
};
export default pagination;