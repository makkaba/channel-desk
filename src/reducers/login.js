import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    user: ''
};

function login(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                user: state.user
            };
        case LOGOUT: 
            return {
                user: ''
            };
        default:
            return state;
    }
}

export default login;