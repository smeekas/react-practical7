import { paginationActionTypes } from "../actionTypes/paginationActionTypes";
import { uiActionTypes } from "../actionTypes/uiActionTypes";
import { userActionTypes } from "../actionTypes/userActionTypes";

import { axiosInstance } from "../services/apiService";
export const fetchUserPageChanged = (perPage) => {
  return async (dispatch) => {
    dispatch({ type: uiActionTypes.LOADING });
    const response = await axiosInstance.get(
      `/users?page=1&per_page=${perPage}`
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
