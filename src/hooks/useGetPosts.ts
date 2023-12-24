import axios from "axios"
import {useInfiniteQuery, useQuery} from "react-query"

const useGetPosts = () => {
    const fetchPosts = async ({pageParam = 1}) => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params:{
                _page: pageParam
            }
        })
    
        return data // [..{}]
    }

    return useInfiniteQuery({ // [[...{}],[...{}]]
        queryKey: "fetchPosts",
        queryFn: fetchPosts,
        getNextPageParam:( lastPage, allPages) => {
            if (lastPage.length === 0) return undefined 
            return allPages.length + 1
        }
    })
}

export default useGetPosts