import { userActionTypes } from "../actionTypes/userActionTypes";
import { paginationActionTypes } from "../actionTypes/paginationActionTypes";
import { uiActionTypes } from "../actionTypes/uiActionTypes";
import axios from "axios";
export const fetchUsers = (perPage = 2) => {
  return async (dispatch) => {
    dispatch({ type: uiActionTypes.LOADING });

    const response = await axios.get(
      `${process.env.REACT_APP_API}?page=1&per_page=${perPage}`
    );

    const data = response.data;
    dispatch({
      type: paginationActionTypes.ADD_PAGINATION,
      currentPage: data.page,
      perPage: data.per_page,
      total: data.total,
      totalPages: data.total_pages,
    });
    dispatch({ type: uiActionTypes.NOT_LOADING });
    dispatch({ type: userActionTypes.FETCH_USER, data: data.data });
  };
};

export const fetchUsersPagination = (pageNumber, perPage) => {
  return async (dispatch) => {
    dispatch({ type: uiActionTypes.LOADING });

    const response = await axios.get(
      `${process.env.REACT_APP_API}?page=${pageNumber}&per_page=${perPage}`
    );

    const data = response.data;

    dispatch({
      type: paginationActionTypes.CHANGE_PAGE,
      currentPage: pageNumber,
    });
    dispatch({ type: uiActionTypes.NOT_LOADING });
    dispatch({ type: userActionTypes.FETCH_USER, data: data.data });
  };
};

export const hoverUser = ({ id }) => {
  return { type: userActionTypes.SHOW_USER, id: id };
};
