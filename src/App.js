import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import SearchInput from "./components/SearchInput";
import SortItem from "./components/SortItem";
import { Table, Row, Item, ItemHead, Body } from "./components/Table";
import usePagination from "./hooks/usePagination";
import usePosts from "./hooks/usePosts";
import { setSortField, setSortMethod } from "./store/actions/posts.action";
import {
  getPageFromURL,
  getSearchFromURL,
  getSortFieldFromURL,
  getSortMethodFromURL,
} from "./utils/path";

function App() {
  const dispatch = useDispatch();

  const { posts, loading, error, fetchPosts, search } = usePosts();
  const { page, countAllPage, toPage, setPage } = usePagination();

  useEffect(() => {
    const page = getPageFromURL();
    const q = getSearchFromURL();
    const sortField = getSortFieldFromURL();
    const sortMethod = getSortMethodFromURL();

    setPage(page && page > 0 ? page : 1);
    search(q && "");
    dispatch(setSortField(sortField));
    dispatch(setSortMethod(sortMethod));
    fetchPosts();

    // eslint-disable-next-line
  }, [dispatch]);

  const onChangeSearchInput = (e) => {
    search(e.target.value);
    fetchPosts();
  };

  return (
    <Container>
      <Header>
        <SearchInput onChange={onChangeSearchInput} />
      </Header>

      <Table>
        <Body>
          <Row>
            <ItemHead>
              <SortItem title="ID" name="id" />
            </ItemHead>
            <ItemHead>
              <SortItem title="Заголовок" name="title" />
            </ItemHead>
            <ItemHead>
              <SortItem title="Описание" name="body" />
            </ItemHead>
          </Row>

          {!loading &&
            !error &&
            posts.map((post) => (
              <Row key={post.id}>
                <Item style={{ textAlign: "center" }}>{post.id}</Item>
                <Item style={{ width: "50%" }}>{post.title}</Item>
                <Item style={{ width: "40%" }}>{post.body}</Item>
              </Row>
            ))}
        </Body>
      </Table>

      {loading && <Info>Загрузка...</Info>}
      {error && <Info>Ошибка загрузки :(</Info>}
      {!loading && !error && posts.length === 0 && <Info>Постов нету</Info>}

      <Pagination
        activePage={page}
        countAllPage={countAllPage}
        toPage={toPage}
      />
    </Container>
  );
}

const Info = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

export default App;
