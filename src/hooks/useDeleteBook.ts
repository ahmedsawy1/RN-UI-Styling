import axios from "axios";
import {useMutation, useQueryClient} from "react-query"
import { endpoint } from "../config/config";

const useDeleteBook = () => {
   const queryClient =  useQueryClient()

   const deleteFN = async (bookID: number) => {
    const {data} = await axios.delete(`${endpoint}/${bookID}`)

    queryClient.invalidateQueries("books")
    return data
   }

   return useMutation(deleteFN)
}

export default useDeleteBook 