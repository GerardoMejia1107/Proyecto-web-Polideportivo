import {useState} from 'react';
import {outcome} from "../utils/sweetAlert.js";

const usePost = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (body) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                outcome.error()
                throw new Error('Error posting data');
            }
            outcome.success()
            const result = await response.json();
            setData(result);
            return true
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {data, loading, error, postData};
};

export default usePost;
