import axios from "axios";

export const  instanse =axios.create({
    baseURL:'https://rickandmortyapi.com/api'
})


