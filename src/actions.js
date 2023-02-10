import axios from "axios";
export const FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS_SUCCESS";

export const fetchPositions = () => async dispatch => {
    const { data } = await axios.get("https://d407n4zji1.execute-api.eu-central-1.amazonaws.com/api/positions");
    dispatch({
        type: FETCH_POSITIONS_SUCCESS,
        payload: data
    });
};