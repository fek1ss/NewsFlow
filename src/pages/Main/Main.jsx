import React from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { useEffect, useState } from 'react';
import { getCategoties, getNews } from '../../api/apiNews';
import NewsList from './../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from './../../components/Pagination/Pagination';
import Categories from './../../components/Categories/Categories';
import Search from './../../components/Search/Search';
import { useDebounce } from '../../hooks/useDebounce';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [keywords, setKeyWords] = useState('');
  const totalPages = 10;
  const pageSize = 10;
  const debouncedKeyword = useDebounce(keywords, 1000);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
        keywords: debouncedKeyword,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await getCategoties();
      setCategories(['All', ...response.categories]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeyword]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePage = (numberPage) => {
    setCurrentPage(numberPage);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Search keywords={keywords} setKeywords={setKeyWords} />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={'Banner'} />
      )}

      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePage={handlePage}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={'item'} />
      )}

      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePage={handlePage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
