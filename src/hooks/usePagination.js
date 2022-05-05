import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPage } from "../store/actions/posts.action";
import { setPageToURL } from "../utils/path";

function usePagination() {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.posts.totalCount);
  const limit = useSelector((state) => state.posts.limit);
  const countAllPage = Math.ceil(totalCount / limit);

  const toPage = (page) => {
    if (page > 0 && page <= countAllPage) {
      setPageToURL(page);
      dispatch(setPage(page));
      dispatch(fetchPosts());
    }
  };

  return {
    page: useSelector((state) => state.posts.page),
    totalCount,
    limit,
    countAllPage,
    toPage: toPage,
    setPage: (page) => dispatch(setPage(page)),
  };
}

export default usePagination;
