import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { API_URL } from "../constants/env"

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        axios
            .get(`${API_URL}auth/me`, {
                withCredentials: true // 👈 Necesario para enviar la cookie
            })
            .then((resp) => {
                setUserData(resp.data.me); // 👈 Asegúrate del nombre correcto en la respuesta
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    setUserData(null); // 👈 el usuario no está autenticado
                    console.warn("Sesión expirada o inválida");
                } else {
                    console.error("Error inesperado", err);
                }
            });
    }, []);


    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }