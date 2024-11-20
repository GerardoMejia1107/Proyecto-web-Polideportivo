import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/auth/profile", {
                    withCredentials: true,
                });

                setUser(response.data);
            } catch (err) {
                console.error("Error fetching user profile:", err);
                setUser(null);
            }
        };

        fetchProfile();
    }, []);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
