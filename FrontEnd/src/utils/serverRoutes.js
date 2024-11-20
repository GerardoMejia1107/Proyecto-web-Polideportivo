const API_BASIS_URL = import.meta.env.VITE_API_BASIS_URL;

export const URLS = {
    registerURLS: {
        delete: `${API_BASIS_URL}/auth/delete`,
        fetchAll: `${API_BASIS_URL}/auth/getAll`,
        fetchOne: `${API_BASIS_URL}/auth/`,
        update: `${API_BASIS_URL}/auth/update`,
        post: `${API_BASIS_URL}/auth/register`,
    },

    loginURLS: {
        post: `${API_BASIS_URL}/auth/login`,
        get: `${API_BASIS_URL}/auth/profile`,
    }
    ,
    universityURLS: {
        delete: `${API_BASIS_URL}/universities/delete`,
        fetchAll: `${API_BASIS_URL}/universities/getAll`,
        fetchOne: `${API_BASIS_URL}/universities`,
        update: `${API_BASIS_URL}/universities/update`,
        post: `${API_BASIS_URL}/universities/create`

    },
    sportURLS: {
        delete: `${API_BASIS_URL}/sports/delete`,
        fetchAll: `${API_BASIS_URL}/sports/getAll`,
        fetchOne: `${API_BASIS_URL}/sports`,
        update: `${API_BASIS_URL}/sports/update`,
        post: `${API_BASIS_URL}/sports/create`
    },

    trainURLS: {
        delete: `${API_BASIS_URL}/trains/delete`,
        fetchAll: `${API_BASIS_URL}/trains/getAll`,
        fetchOne: `${API_BASIS_URL}/trains`,
        update: `${API_BASIS_URL}/trains/update`,
        post: `${API_BASIS_URL}/trains/create`,
    }

};