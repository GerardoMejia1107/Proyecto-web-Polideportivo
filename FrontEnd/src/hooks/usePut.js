import { useState } from "react";

const usePut = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePut = async (url, data, options = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    ...options.headers,
                },
                body: JSON.stringify(data),
                ...options,
            });

            if (!response.ok) {
                throw new Error(`Failed to update: ${response.statusText}`);
            }

            const result = await response.json();
            setLoading(false);
            return result; // Return the result for further use
        } catch (err) {
            setLoading(false);
            setError(err.message);
            console.error("Error during PUT:", err);
        }
    };

    return { handlePut, loading, error };
};

export default usePut;
