import axios from "axios";
import {useMutation, useQueryClient} from "react-query"
import {endpoint} from "../config/config"


const useAddBook = () => {
    const queryClient = useQueryClient()

    const postBookFN = async (bookBody) => {
        const {data} = await axios.post(endpoint, bookBody)

        queryClient.invalidateQueries("books")
        return data
    }

    return useMutation(postBookFN)
}

export default useAddBook