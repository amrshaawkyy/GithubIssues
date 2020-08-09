import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FilterButton from '../../components/UI/FilterButton/FilterButton';
import PropTypes from 'prop-types';
class IssuesFiltering extends Component {
    shouldComponentUpdate(previousProps, previousState) {
        if (previousProps.listFilter !== this.props.listFilter || previousProps.sortName !== this.props.sortName || previousProps.startDate !== this.props.startDate) {
            return true;
        }
        return false;
    }
    handleFilter(e) {
        e.preventDefault();
        const value = e.target.dataset.choice
        const type = e.target.dataset.listFilter
        let obj = {}
        obj[type] = value
        this.props.onFilterChange(obj);
    }
    render() {
        const buttonArray = ["issues", "pull requests", "all"];
        const buttonArray2 = ["open", "closed", "all"];
        return (
            <nav className="navbar  navbar-center " role="navigation">
                {
                    <div className="navbar-center">
                        <div id="navbarBasicExample" className="navbar-menu navbar-center">
                            <span className="navbar-item">
                                <span className="navbar-center">
                                    {buttonArray.map((stateChoice, i) => {

                                        return <span key={i} >
                                            <FilterButton
                                                filterType="choice"
                                                clickFunction={(event) => this.handleFilter(event)}
                                                listFilter={this.props.listFilter}
                                                stateChoice={stateChoice}
                                                i={i}
                                            />
                                        </span>
                                    })}
                                </span>
                            </span>
                            <span className="navbar-item">
                                <span className="navbar-center">
                                    {buttonArray2.map((stateChoice, i) => {
                                        return <span key={i}>
                                            <FilterButton
                                                filterType="state"
                                                clickFunction={(event) => this.handleFilter(event)}
                                                listFilter={this.props.listFilter}
                                                stateChoice={stateChoice}
                                                i={i}
                                            />
                                        </span>
                                    })}
                                </span>
                            </span>

                            <span className="navbar-item">
                                <Button btnType="Success" clicked={this.props.clicked}> Sorting By {this.props.sortName}</Button>
                            </span>
                            <div className="navbar-center">
                                <p style={{ marginRight: '5px', fontWeight: 'bold', color: 'dimgrey' }}>Choose Date From </p>
                                <span>
                                    <DatePicker className="DateRangePickerInput"
                                        selected={this.props.startDate}
                                        onChange={this.props.handleDateChange}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </nav>
        );
    }
}
IssuesFiltering.propTypes = {
    listFilter: PropTypes.object,
    sortName: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    onFilterChange: PropTypes.func,
    clicked: PropTypes.func,
    handleDateChange: PropTypes.func
};
export default IssuesFiltering;