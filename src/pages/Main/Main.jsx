import styles from "./styles.module.css";
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import NewsList from './../../components/NewsList/NewsList';
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from './../../components/Pagination/Pagination';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
      try {
        setIsLoading(true);
        const response = await getNews(currentPage, pageSize);
        setNews(response.news);
        console.log(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
  }

  useEffect(()=> {
    fetchNews(currentPage);
  }, [currentPage])

  const handleNextPage = () => {
    if(currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  }

  const handlePreviousPage = () => {
    if(currentPage > 1)
      setCurrentPage(currentPage - 1);
  }

  const handlePage = (numberPage) => {
    setCurrentPage(numberPage);
  }

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} /> 
      ) : (
        <Skeleton count={1} type={"Banner"} />
      )} 

      <Pagination 
      totalPages={totalPages}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePage={handlePage}
      currentPage={currentPage}
      />

      {!isLoading? (
        <NewsList news={news} /> 
      ) : (
        <Skeleton count={10} type={"item"} />
      )}

    <Pagination 
      totalPages={totalPages}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePage={handlePage}
      currentPage={currentPage}
      />
    </main>
  )
}

export default Main;