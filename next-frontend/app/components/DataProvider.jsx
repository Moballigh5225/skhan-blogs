// components/DataProvider.jsx
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { parentState, loadingState } from "../atoms/parentAtom"; // Ensure loadingState is imported
import { fetchData } from "../utils/fetchData";

const DataProvider = ({ children }) => {
  const setData = useSetRecoilState(parentState);
  const setLoading = useSetRecoilState(loadingState); // Set loading state

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const { books, poetry, bookReviews, articles } = await fetchData(); // Include articles
        setData({
          books,
          poetry,
          bookReviews,
          articles, // Set articles in the state
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    getData();
  }, [setData, setLoading]);

  return <>{children}</>;
};

export default DataProvider;
