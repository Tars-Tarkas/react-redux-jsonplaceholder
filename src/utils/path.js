import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export function setPageToURL(page) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", String(page));
  history.replace(url.pathname + url.search, {});
}

export function getPageFromURL() {
  const url = new URL(window.location.href);
  return Number(url.searchParams.get("page"));
}

export function setSearchToURL(q) {
  const url = new URL(window.location.href);
  url.searchParams.set("q", q ? q : "");
  history.replace(url.pathname + url.search, {});
}

export function getSearchFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("search");
}

export function setSortFieldToURL(field) {
  const url = new URL(window.location.href);
  url.searchParams.set("field", field);
  history.replace(url.pathname + url.search, {});
}

export function getSortFieldFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("field");
}

export function setSortMethodToURL(method) {
  const url = new URL(window.location.href);
  url.searchParams.set("method", method);
  history.replace(url.pathname + url.search, {});
}

export function getSortMethodFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("method");
}
