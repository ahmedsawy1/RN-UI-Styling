import axios from "axios"
import { useQuery } from "react-query"

const useGetBooks = () => {
  const fetchBooks = async () => {
    const { data } = await axios.get("https://649ea51c245f077f3e9cb5bc.mockapi.io/books");

    return data; // Return the actual data, not the useQuery hook
  }

  return useQuery("books", fetchBooks); // Call useQuery hook here with the key and fetch function
}

export default useGetBooks;
