import axios from "axios";



const axiosInstanceNetflix = axios.create({ 
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json"
    },
    params:{
        api_key: '7f853d464ac954ff376525370120f3bd',
        sort_by :'popularity.desc',
        language:'en-US',
         
    }

});


export default axiosInstanceNetflix;