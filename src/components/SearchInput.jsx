import styled from "styled-components";

function SearchInput({ ...props }) {
  return (
    <SearchInputWrapper>
      <SearchInputStyle placeholder="Поиск" {...props} />
      <Icon />
    </SearchInputWrapper>
  );
}

const Icon = styled.div`
  position: absolute;
  background-image: url(/images/search.png);
  height: 20px;
  width: 20px;
  right: 18px;
  top: calc(50% - 10px);
`;

const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 600px;
`;

const SearchInputStyle = styled.input`
  display: block;
  color: #b3b7bf;
  background-color: #5a5c66;
  border: none;
  padding: 15px 25px;
  width: -webkit-fill-available;
  ::placeholder {
    color: #b3b7bf;
  }
`;

export default SearchInput;
