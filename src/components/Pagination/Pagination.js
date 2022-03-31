import styles from "./Pagination.module.css";
import { fetchUsersPagination } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { useCallback } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { fetchUserPageChanged } from "../../actions/paginationAction";
const Pagination = () => {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.pagination.perPage);
  const { currentPage, totalPages } = useSelector((state) => state.pagination);

  const curr = currentPage;

  const prev = curr !== 1 ? curr - 1 : -1;
  const next = curr < totalPages ? curr + 1 : -1;
  const nextHandler = useCallback(() => {
    dispatch(fetchUsersPagination(next, perPage));
  }, [dispatch, next, perPage]);
  const prevHandler = useCallback(() => {
    dispatch(fetchUsersPagination(prev, perPage));
  }, [dispatch, perPage, prev]);
  const perPageChangeHandler = useCallback(
    (event) => {
      dispatch(fetchUserPageChanged(event.target.value));
    },
    [dispatch]
  );

  const cellStyle = styles.cell;
  const currentCellStyle = styles.current;

  const prevPageComponent = prev !== -1 && (
    <Button onClick={prev !== -1 && prevHandler} className={cellStyle}>
      {curr - 1}
    </Button>
  );
  const currentPageComponent = (
    <Button className={`${cellStyle} ${currentCellStyle}`}>{curr}</Button>
  );
  const nextPageComponent = next !== -1 && (
    <Button onClick={next !== -1 && nextHandler} className={cellStyle}>
      {curr + 1}
    </Button>
  );
  return (
    <div className={styles.pagination}>
      per page:
      <DropDownMenu
        onChange={perPageChangeHandler}
        className={styles.perPage}
        values={[2, 4, 8, 10, 12]}
      />
      {prevPageComponent}
      {currentPageComponent}
      {nextPageComponent}
    </div>
  );
};
export default Pagination;
