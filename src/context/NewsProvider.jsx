import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NewsContext = createContext();

const NewsProvider = ({children}) => {

  const apiKey = import.meta.env.VITE_API_KEY_NEWS;

  const [ category ,setCategory ] = useState('general');
  const [ newsResult, setNewsResult ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ totalNews, setTotalNews ] = useState(0);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${apiKey}`;
    getNews(url);
    setPage(1);
  }, [category])

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&page=${page}&apiKey=${apiKey}`;
    getNews(url);
  }, [page]);

  const handleChangeCategory = e => {
    setCategory(e.target.value);
  }

  const handleChangePage = (e, current) => {
    setPage(current)
  };

  const getNews = async url => {
    const { data } = await axios(url);
    setNewsResult(data.articles);
    setTotalNews(data.totalResults);
  };

  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        newsResult,
        totalNews,
        handleChangePage,
        page
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export {
  NewsProvider
};

export default NewsContext;