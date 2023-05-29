import axios from "axios";
import { GET_MOVIES } from "./actionTypes";

export const FetchMovies = ()=>async (dispatch) => {
   let res=await axios
      .get("https://www.omdbapi.com/?s=action&apikey=3b9bdc02&page=1")
      .then((res) => {
        console.log(res.data.Search);
        dispatch({type:GET_MOVIES,payload:res.data.Search})
      });
  };