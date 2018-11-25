import React from 'react';
import { connect } from 'react-redux';
import { initialize } from '../../store/app/actions';
import { getIsInitialized } from '../../store/app/selectors';
import Login from '../../components/pages/login/Login';

const LoginContainer = props => {
    return <Login {...props} />;
};

const mapStateToProps = state => ({
    isInitialized: getIsInitialized(state)
});

const mapDispatchToProps = dispatch => ({
    initialize: init => dispatch(initialize(init))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
