import { ADD_VIEW } from "./types";

export const addview = (number) => {
    return {
        type : ADD_VIEW,
        payload: Number(number)
    }
}

