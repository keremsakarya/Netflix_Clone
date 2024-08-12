import axios from "axios"

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    //* yapacağımız isteklere eklenecek olan header lar
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      params: {language: 'tr-TR'},
})