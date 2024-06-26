import axios from 'axios'
const instance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:3000,
    headers:{
        "Content-Type":"application/json"
    },
});
export const getProducts = async ()=>{
    try {
      const res = await instance.get("/products");
    //   console.log(res.data
   return res.data;
    } catch (error) { 
      console.log(error);
    }
  }
export default instance;