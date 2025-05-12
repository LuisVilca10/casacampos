import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../constants/env"


const useFetch = (endpoint, config = {}) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API_URL}${endpoint}`, config)
            .then((resp) => {
                setData(resp.data)
            })
            .catch((error) => {
                console.log(error)
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [endpoint])

    return {
        data, error, loading
    }

}

export default useFetch