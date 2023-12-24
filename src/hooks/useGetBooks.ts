import axios from "axios"
import { useQuery } from "react-query"
import { endpoint } from "../config/config";

const useGetBooks = () => {
  const fetchBooks = async () => {
    const { data } = await axios.get(endpoint);

    return data;
  }

  return useQuery("books", fetchBooks);
}

export default useGetBooks;
