import axiosInstanceNetflix from "../../AxiosConfig/instanceAxios";

export default function changeMovies(data) {
  return (dispatch) => {
    axiosInstanceNetflix
      .get(data)
      .then((res) => {
        dispatch({
          type: "SET_MOVIES",
          payload: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
