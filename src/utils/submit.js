import { api } from '../../utils/api';

export const submitRequest = async (product, routing) => {
    const { match: { params: { id }}, history } = routing;
    try {
        const result = (product && id) 
            ? await api.updateProduct(id, product)
            : await api.createProduct(product);

        if (result && result.data && result.data.message) {
            history.push(PRODUCTS_ROUTE);
        }
        else {
            return {...result};
        }
    } catch (err) {
        console.error(err)
    }
}