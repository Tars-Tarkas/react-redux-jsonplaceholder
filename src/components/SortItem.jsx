import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  fetchPosts,
  setSortField,
  setSortMethod,
} from "../store/actions/posts.action";
import { setSortFieldToURL, setSortMethodToURL } from "../utils/path";

function SortItem({ title, name }) {
  const dispatch = useDispatch();

  const [sort, setSort] = useState("asc");

  const toogle = () => {
    if (sort === "asc") {
      setSort("desc");
      dispatch(setSortMethod("desc"));
      setSortMethodToURL("desc");
    }
    if (sort === "desc") {
      setSort("asc");
      dispatch(setSortMethod("asc"));
      setSortMethodToURL("asc");
    }

    setSortFieldToURL(name);
    dispatch(setSortField(name));
    dispatch(fetchPosts());
  };

  return (
    <SortItemWrapper>
      <Title>{title}</Title>
      <Icon
        onClick={toogle}
        style={{ transform: sort === "desc" ? "rotate(180deg)" : "none" }}
      />
    </SortItemWrapper>
  );
}

const Title = styled.div``;

const Icon = styled.div`
  background-image: url(/images/arrow.png);
  height: 6px;
  width: 12px;
  margin-top: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const SortItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default SortItem;
