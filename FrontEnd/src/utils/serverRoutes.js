const API_BASIS_URL = import.meta.env.VITE_API_BASIS_URL;

export const URLS = {
    universityURLS: {
        delete: `${API_BASIS_URL}/universities/delete`,
        fetchAll: `${API_BASIS_URL}/universities/getAll`,
        fetchOne: `${API_BASIS_URL}/universities/`,
        update: `${API_BASIS_URL}/universities/update`,
        post: `${API_BASIS_URL}/universities/create`

    },
    sportURLS: {
        delete: `${API_BASIS_URL}/sports/delete`,
        fetchAll: `${API_BASIS_URL}/sports/getAll`,
        fetchOne: `${API_BASIS_URL}/sports/`,
        update: `${API_BASIS_URL}/sports/update`,
        post: `${API_BASIS_URL}/sports/create`
    },
};