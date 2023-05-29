import { GET_MOVIES } from "./actionTypes";

const initialState={
    movies:[]
}

export const reducer=(state=initialState,{type,payload}) => {
    switch (type) {
        case GET_MOVIES:{
            return {...state, movies:payload};
        }
        default:{
            return state;
        }
    }
}