import { ADD_VIEW } from "./types";

const initialSate = {
    count : 0
}
const viewsReducer = (state=initialSate, action) => {
    switch(action.type){
        case ADD_VIEW:
            return {
                ...state,
                count : state.count + action.payload //입력되어 전달된 값만큼 더하기
            } 
        default: return state;
    }
}

export default viewsReducer;