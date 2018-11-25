import React from 'react';
import { connect } from 'react-redux';
import { initialize, loading, data } from '../../store/app/actions';
import { getIsInitialized, getIsLoaded, getData } from '../../store/app/selectors';
import Home from '../../components/pages/home/Home';

const HomeContainer = props => {
    return <Home {...props} />;
};

const mapStateToProps = state => ({
    isInitialized: getIsInitialized(state),
    isInfoLoaded: getIsLoaded(state),
    data: getData(state)
});

const mapDispatchToProps = dispatch => ({
    initialize: init => dispatch(initialize(init)),
    loading: isLoading => dispatch(loading(isLoading)),
    dating: dat => dispatch(data(dat))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
