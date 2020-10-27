import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

apiInstance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        const { status, data } = error.response;
        if (
          status === 400
          && Array.isArray(data.errors)
          && data.errors.length
        ) {
            const fetchedErrors = {}
            data.errors.forEach(error => {
                fetchedErrors[error.field] = error.error;
            })
            return fetchedErrors;
        } else {
            console.error(error);
        }
    }
);

// function getToken() {

// }

const makeRequests = instance => async(method, url, params ={}) => {
    // const token = getToken();
    // if (token){
    //     params.headers = { 
    //         ...params.headers, 
    //         authorization: `Bearer ${token}`
    //     };
    // }
    return instance({ method, url, ...params });
}

const apiRequest = (method, url) => params => makeRequests(apiInstance)(method, url, params);

export const api = {
    fetchProducts: apiRequest('get', '/products'),
    getProduct: id => apiRequest('get', `/products/${id}`),
    createProduct: product => apiRequest('post', '/products')({ product }),
    updateProduct: (id, product) => apiRequest('put', `/products/${id}`)({ product }),
    deleteProduct: id => apiRequest('delete', `/products/${id}`)
};