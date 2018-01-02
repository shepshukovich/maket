import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};

const mapStateToProps = ({ auth }) => {
    return { auth };    //same as auth: auth
};