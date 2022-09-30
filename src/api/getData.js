//import libs
import axios from "axios"

//import env variables
const API_URI = import.meta.env.VITE_VALORANT_API

//get Dictionary Data
export const fetchDictionary = async(word) => {
    console.log("Requesting Dictionary Words")
    const request = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            return response.data[0]
        })
    return request
}

