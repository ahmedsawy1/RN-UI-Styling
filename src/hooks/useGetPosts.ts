import axios from "axios"
import {useQuery} from "react-query"

const useGetPosts = () => {
    const fetchPosts = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    
        return data
    }

    return useQuery("posts", fetchPosts)
}

export default useGetPosts