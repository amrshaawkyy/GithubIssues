import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/AUX1/Aux1';
import PropTypes from 'prop-types';
class WithErrorHandler extends Component {
    state = {
        error: true
    }
    errorConfirmedHandler = () => {
        this.setState({ error: false });
    }
    render() {
        return (
            <Aux>
                <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
                    {this.state.error ? this.props.errormsg : null}
                </Modal>
            </Aux>
        );
    }
}
WithErrorHandler.propTypes = {
    errormsg: PropTypes.string
};
export default WithErrorHandler;
