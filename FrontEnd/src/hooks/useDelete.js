import { useState } from "react";

const useDelete = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async (url, options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method: "DELETE",
                ...options,
            });
            if (!response.ok) {
                throw new Error(`Failed to delete: ${response.statusText}`);
            }
            setLoading(false);
            return response.json(); // Assuming the API returns a JSON response
        } catch (err) {
            setLoading(false);
            setError(err.message);
            console.error("Error during DELETE:", err);
        }
    };

    return { handleDelete, loading, error };
};

export default useDelete;
