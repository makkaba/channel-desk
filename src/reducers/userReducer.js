import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    user: ''
};

function userReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                user: action.payload
            };
        case LOGOUT: 
            return {
                user: ''
            };
        default:
            return state;
    }
}

export default userReducer;